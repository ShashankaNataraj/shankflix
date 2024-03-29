import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/Header";
import Reel from "./Components/Reel/Reel";
import "./styles/Styles.scss";
import { StateProvider } from "./State";
import Reducer from "./Reducer";
function App() {
  const initialState = {
    isLoading: false,
    movies: [],
    expandedMovie: null,
    windowSize: null
  };

  return (
    <StateProvider initialState={initialState} reducer={Reducer}>
      <div className="App">
        <Header />
        <Reel />
      </div>
    </StateProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
