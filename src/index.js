import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/Header";
import Reel from "./Components/Reel/Reel";
import "./Styles.scss";
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
        let { breaksAfterEvery } = action;
        return {
          ...state,
          expandedMovie: action.expandedMovie,
          breaksAfterEvery
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
