import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./navbar";

const App = (props) => {
  console.log("props", props);

  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <h1>Hola {props.pepe}</h1>
      <button onClick={() => dispatch({ type: "PEPE" })}>button</button>
    </div>
  );
};

App.defaultProps = {};

export default App;
