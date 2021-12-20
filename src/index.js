import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import MainView from "./pages/main";

const App = (initialState) => {
  const initReducer = reducer(initialState);

  const store = createStore(initReducer);

  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
};

export default App;
