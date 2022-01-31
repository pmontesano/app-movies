import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainView from '../../components/main';
import { fetchThunk } from '../../actions/fetch';

const MainPage = (props) => {
  const initialState = useSelector((state) => state);

  return <MainView {...initialState} {...props} />;
};

export default MainPage;
