/**
 * 
 * "use client"


import React, { createContext, useContext, useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { getCurrentUser } from '@/api/usuarios/getCurrentUser';
import { getStorageItem } from '@/utils/localStore';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const updateUser = (user) => {
    setCurrentUser(user);
  };

  const userHasRole = (roles) => {
    // Certifique-se de que roles seja sempre um array para simplificar a lógica
    const rolesToCheck = Array.isArray(roles) ? roles : [roles];
    return currentUser?.authorities.some(auth => rolesToCheck.includes(auth.authority));
  };

  useEffect(() => {
    // Assumindo que você armazena um token no localStorage após o login
    const token = getStorageItem("token")
    console.log(token)
    if (token) {
      const fetchUser = async () => {
        try {
          const response = await getCurrentUser(); // Use o token para buscar as informações do usuário
          console.log(response.data)
          updateUser(response.data);
          
        } catch (error) {
          console.error('Erro ao buscar informações do usuário:', error);
        }
      };
  
      fetchUser();
    } else {
      // Se não houver token, considere que o usuário não está logado
      updateUser(null);
    }
  }, []); // Dependências vazias fazem com que isso rode apenas na montagem do componente
  

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ currentUser, updateUser, userHasRole }}>
        {children}
      </UserContext.Provider>
    </Provider>
  );
};


export const useUser = () => useContext(UserContext);


 */
import { Provider } from 'react-redux';
import store from '@/redux/store';

const ProviderRedux = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ProviderRedux;