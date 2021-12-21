import React from 'react';
import { useSelector } from 'react-redux';
import MainView from '../../components/main';

const MainPage = () => {
  const initiaState = useSelector((state) => state);

  return <MainView {...initiaState} />;
};

export default MainPage;
