import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { toast } from 'react-toastify';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techs, setTech] = useState([]);
  const [techEdit, setTechEdit] = useState(null);

  const getTech = async () => {
    const userId = JSON.parse(localStorage.getItem('@KenziHub:USERID'));
    try {
      const res = await api.get(`/users/${userId}`);
      setTech(res.data.techs);
    } catch (error) {
      console.log(error);
    }
  };

  const addTech = async (formData) => {
    const token = JSON.parse(localStorage.getItem('@KenziHub:TOKEN'));
    try {
      const res = await api.post('/users/techs', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTech([...techs, res.data]);
      toast.success('Tech cadastrada com sucesso :)');
    } catch (error) {
      toast.error(
        'Algo de errado não está certo, por favor tente novamente :(',
      );
    }
  };

  const editTech = async (formData) => {
    const techId = techEdit.id;
    const { status } = formData;
    try {
      const token = JSON.parse(localStorage.getItem('@KenziHub:TOKEN'));
      const res = await api.put(
        `/users/techs/${techId}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const newTech = techs.map((tech) => {
        if (techId === tech.id) {
          return { ...tech, status: status };
        } else {
          return tech;
        }
      });

      setTech(newTech);

      toast.success('Parabéns pela sua evolução!! :)');
    } catch (error) {
      toast.error(
        'Algo de errado não está certo, por favor tente novamente :(',
      );
    }
  };

  const removeTech = async () => {
    const techId = techEdit.id;

    try {
      const token = JSON.parse(localStorage.getItem('@KenziHub:TOKEN'));
      const res = await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechs = techs.filter((tech) => tech.id !== techId);
      setTech(newTechs);
      toast.success('Tech removida com sucesso :)');
    } catch (error) {
      toast.error(
        'Algo de errado não está certo, por favor tente novamente :(',
      );
    }
  };

  return (
    <TechContext.Provider
      value={{
        techs,
        setTech,
        addTech,
        editTech,
        removeTech,
        techEdit,
        setTechEdit,
        getTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
