import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TechContext } from '../../Providers/TechContext';
import { Headline } from '../../style/typograthy';
import { FormContainer } from '../../style/formContainer';
import { ModalContainer } from '../../style/modalContainer';
import Button from '../Button';

const ModalEditTech = ({ isOpen, closeModalEdit }) => {
  const { register, handleSubmit, reset } = useForm();
  const { editTech, removeTech, techEdit } = useContext(TechContext);

  const submit = async (formData) => {
    await editTech(formData);
    closeModalEdit();
    reset();
  };

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <div className="modal-title">
        <Headline color="--grey-0">Tecnologia detalhes</Headline>
        <Button buttonSize="small" onClick={closeModalEdit} text="X" />
      </div>

      <div className="modalBackground">
        <FormContainer onSubmit={handleSubmit(submit)}>
          <fieldset className="input-container">
            <label>
              <Headline color="--grey-0">Nome do projeto</Headline>{' '}
            </label>

            <input
              className="input-techEdit"
              type="text"
              disabled
              placeholder={techEdit.title}
            />
          </fieldset>

          <fieldset className="status-container">
            <label>
              <Headline color="--grey-0">Atualize o status</Headline>{' '}
            </label>

            <select {...register('status')}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </fieldset>

          <div className="buttons-card">
            <Button type="submit" buttonSize="edit" text="Salvar informações" />

            <Button
              className="btn-remove"
              type="button"
              buttonSize="remove"
              text="Excluir"
              onClick={() => {
                removeTech();
                closeModalEdit();
              }}
            />
          </div>
        </FormContainer>
      </div>
    </ModalContainer>
  );
};

export default ModalEditTech;
