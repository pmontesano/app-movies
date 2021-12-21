import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainService from '../server/services';
import Navbar from './navbar';

const Main = (props) => {
  console.log('pablito props', props);

  const dispatch = useDispatch();

  const fetchThunk = async (dispatch) => {
    dispatch({ type: 'FETCH_PENDING' });
    try {
      const data = await MainService('latest')
        .get()
        .then((data) => data.data);

      dispatch({ type: 'FETCH_COMPLETE', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', error: err.message });
    }
  };

  const fecth = () => dispatch(fetchThunk);

  return (
    <div>
      <Navbar />
      <h1>Hola {props.pepe}</h1>
      <button onClick={fecth}>FETCH</button>
    </div>
  );
};

Main.defaultProps = {};

export default Main;
