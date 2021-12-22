import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainService from '../server/services';
import Navbar from './navbar';
import List from './list';

const Main = (props) => {
  const dispatch = useDispatch();

  const fetchThunk = (category) => async (dispatch) => {
    dispatch({ type: 'FETCH_PENDING' });
    try {
      const data = await MainService(category)
        .get()
        .then((data) => data.data);

      dispatch({ type: 'FETCH_COMPLETE', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', error: err.message });
    }
  };

  const fecth = (category) => dispatch(fetchThunk(category));

  return (
    <div>
      <Navbar />
      <h1>Hola {props.pepe}</h1>
      <List results={} />
      <button onClick={() => fecth('top_rated')}>FETCH</button>
    </div>
  );
};

Main.defaultProps = {};

export default Main;

