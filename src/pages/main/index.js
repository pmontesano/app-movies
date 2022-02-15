import React from 'react';
import { useSelector } from 'react-redux';
import MainView from '../../components/main';

const MainPage = (props) => {
  const initialState = useSelector((state) => state);

  return <MainView {...initialState} {...props} />;
};

export default MainPage;
