import { useContext } from 'react';
import { AuthContext } from './authProvider';

const UseAuth = () => {
  const contextValue = useContext(AuthContext);

  return contextValue;
};

export default UseAuth;
