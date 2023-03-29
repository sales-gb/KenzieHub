import React, { useContext, useEffect, useState } from 'react';
import { Headline, Title2, Title3 } from '../../style/typograthy';
import { Container } from '../../style/globalStyles';
import { UseContainer } from './style';
import addIcon from '../../assets/add-icon.svg';
import { TechContext } from '../../Providers/TechContext';
import ModalAddTech from '../ModalAddTech';
import ModalEditTech from '../ModalEditTech';

const CardUser = () => {
  const { techs, setTechEdit, techEdit, getTech } = useContext(TechContext);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  useEffect(() => {
    getTech();
  }, []);

  const openModalAdd = () => {
    setIsModalOpenAdd(true);
  };

  const closeModalAdd = () => {
    setIsModalOpenAdd(false);
  };

  const openModalEdit = () => {
    setIsModalOpenEdit(true);
  };

  const closeModalEdit = () => {
    setIsModalOpenEdit(false);
  };

  return (
    <UseContainer>
      <Container>
        <div className="container-user-info">
          <div className="techTitle">
            <Title2 color="--grey-0">Tecnologias</Title2>
            <button>
              <img onClick={openModalAdd} src={addIcon} alt="" />
            </button>
          </div>

          {techs && techs.length > 0 ? (
            <ul className="techList">
              {techs.map((tech) => (
                <li
                  onClick={() => {
                    setTechEdit(tech);
                    openModalEdit();
                  }}
                  className="techCard"
                  key={tech.id}
                >
                  <Title3 color="--grey-0">{tech.title}</Title3>
                  <Headline color="--grey-2">{tech.status}</Headline>
                </li>
              ))}
            </ul>
          ) : (
            <Title2 color="--grey-1">
              Parece que você ainda não tem nenhuma tech cadastrada :(
            </Title2>
          )}
        </div>
      </Container>

      <ModalAddTech
        isOpen={isModalOpenAdd}
        closeModalAdd={closeModalAdd}
        techEdit={techEdit}
      />
      <ModalEditTech isOpen={isModalOpenEdit} closeModalEdit={closeModalEdit} />
    </UseContainer>
  );
};

export default CardUser;
