import * as yup from 'yup';

export const AddTechSchema = yup.object({
  title: yup.string().required('Por favor insira um nome para sua Tech'),
});
