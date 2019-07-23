import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/Header";
import Reel from "./Components/Reel/Reel";
import "./styles.css";
import { StateProvider } from "./State";
import Constants from "./Constants";

function App() {
  const initialState = {
    isLoading: false,
    movies: [],
    expandedMovie: null
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "toggleIsLoading":
        return {
          ...state,
          isLoading: !state.isLoading
        };
      case "setMovies":
        return {
          ...state,
          movies: action.movies
        };
      case "setExpandedMovie":
        return {
          ...state,
          expandedMovie: action.expandedMovie
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <Header />
        <Reel />
      </div>
    </StateProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
