import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchThunk } from '../actions';
import Navbar from './navbar';
import List from './list';

const Main = (props) => {
  const dispatch = useDispatch();

  const fecthCategory = (param) => dispatch(fetchThunk(param));

  return (
    <div>
      <Navbar />
      <h1>Hola {props.pepe}</h1>
      <button onClick={() => fecthCategory('popular')}>Lo más popular</button>
      <button onClick={() => fecthCategory('top_rated')}>
        Mejor ranqueadas
      </button>
      <List {...props} />
    </div>
  );
};

Main.defaultProps = {};

export default Main;
