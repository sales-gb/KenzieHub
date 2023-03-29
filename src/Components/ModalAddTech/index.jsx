import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TechContext } from '../../Providers/TechContext';
import Input from '../Input';
import { Body, Headline } from '../../style/typograthy';
import { FormContainer } from '../../style/formContainer';
import Button from '../Button';
import { AddTechSchema } from './AddTechSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { ModalContainer } from '../../style/modalContainer';

const ModalAddTech = ({ isOpen, closeModalAdd }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddTechSchema),
  });

  const { addTech } = useContext(TechContext);

  const submit = async (formData) => {
    await addTech(formData);
    closeModalAdd();
    reset();
  };

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <div className="modal-title">
        <Headline color="--grey-0">Cadastrar tecnologia</Headline>
        <Button buttonSize="small" onClick={closeModalAdd} text="X" />
      </div>

      <div className="modalBackground">
        <FormContainer onSubmit={handleSubmit(submit)}>
          <Input
            label={<Body color="--grey-0">Nome da Tech</Body>}
            type="text"
            placeholder="Digite sua Tech"
            register={register('title')}
            error={errors.title?.message}
          />

          <fieldset className="status-container">
            <label>
              <Headline color="--grey-0">Selecione Status</Headline>{' '}
            </label>
            <select {...register('status')}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </fieldset>

          <Button type="submit" buttonSize="add" text="Cadastrar tecnologia" />
        </FormContainer>
      </div>
    </ModalContainer>
  );
};

export default ModalAddTech;
