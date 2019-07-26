import React, { useState, useEffect } from "react";
import Utils from "../../Utils";
import Constants from "../../Constants";
import Thumbnail from "./Movie/Thumbnail";
import "./Reel.scss";
import { useStateValue } from "../../State";
import LazyLoad from "react-lazyload";

export default function Reel() {
  const [{ isLoading, movies }, dispatch] = useStateValue();
  useEffect(() => {
    async function fetchData() {
      dispatch({
        type: "toggleIsLoading"
      });
      const response = await fetch(Constants.MOVIESLIST);
      if (response) {
        const json = await response.json();
        dispatch({
          type: "setMovies",
          movies: json.MYTV.CategoryVideoDetails
        });
        dispatch({
          type: "toggleIsLoading"
        });
      }
    }
    fetchData();
  }, []);
  return (
    <div className="reel">
      {!isLoading &&
        Object.keys(movies).map(movieIdx => {
          const movie = movies[movieIdx];
          return <Thumbnail data={movie} key={movies[movieIdx].videoID} />;
        })}
    </div>
  );
}
