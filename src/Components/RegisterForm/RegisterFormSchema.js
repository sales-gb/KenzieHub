import * as yup from 'yup';

export const RegisterFormSchema = yup.object({
  name: yup.string().required('Inserir um nome é obrigatório!'),
  email: yup
    .string()
    .required('Inserir um e-mail obrigatório!')
    .email('O e-mail digitado é invalido'),

  password: yup
    .string()
    .required('Senha obrigatória!')
    .matches(/(\d)/, 'Deve conter pelo menos um número')
    .matches(/[a-z]/, 'Deve conter pelo menos uma letra minuscula')
    .matches(/[A-Z]/, 'Deve conter pelo menos uma letra maiúscula')
    .matches(/(\W|_)/, 'Deve conter pelo menos um caracter especial')
    .matches(/.{8,}/, 'Deve conter pelo menos 8 caracteres'),

  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password')],
      'Senha incorreta, por favor insira uma senha igual a anterior',
    )
    .required('Confirmação de senha obrigatória!'),

  bio: yup.string('Conte um pouco sobre você').required('Campo obrigatório!'),

  contact: yup.string().required('Campo obrigatório!'),

  course_module: yup.string().required('Campo obrigatório!'),
});
