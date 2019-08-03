import React, { useState, useEffect } from "react";
import Utils from "../../Utils";
import Constants from "../../Constants";
import Thumbnail from "./Thumbnail/Thumbnail";
import "./Reel.scss";
import { useStateValue } from "../../State";
import Preview from "./Preview/Preview";

export default function Reel(props) {
  const [
    { isLoading, movies, breaksAfterEvery, expandedMovie },
    dispatch
  ] = useStateValue();
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
  let previewToBeInsertedAfter = -1;
  if (typeof expandedMovie === "object" && expandedMovie !== null) {
    previewToBeInsertedAfter =
      (Math.ceil((expandedMovie.thumbIdx + 1) / breaksAfterEvery) - 1) *
      breaksAfterEvery;
  }
  function onThumbnailClick(evt, movie, thumbnailData) {
    const siblings = evt.currentTarget.parentElement.children;
    let lastX = 0,
      breaksAfterEvery = 0; // We use this variable to store the first break in the layout. Since the layout is symmetrical, it must break at the same point in every line
    [...siblings]
      .filter(child => child.className.indexOf("preview") < 0)
      .every((child, childIdx) => {
        const boundingRect = child.getBoundingClientRect();
        if (boundingRect.x > lastX) {
          //No op, the cells in the row are being traversed, just record the current X coordinate and move on to the next looped item
          lastX = boundingRect.x;
          return true;
        } else {
          // The browser has broken the cell to the next row, record the idx it has broken at and break out of the loop
          breaksAfterEvery = childIdx;
          return false;
        }
      });
    dispatch({
      type: "setExpandedMovie",
      expandedMovie: { ...thumbnailData, thumbIdx: thumbnailData.thumbIdx },
      breaksAfterEvery,
      event: evt
    });
    setTimeout(
      () =>
        document.querySelector(".preview").scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        }),
      500
    );
  }
  let dummyData = [],
    isDummyMode = false;
  if (isLoading) {
    isDummyMode = true;
    dummyData = [...Array(50)].map((ele, eleIdx) => {
      return {};
    });
  }
  return (
    <div className="reel">
      {isDummyMode &&
        isLoading &&
        dummyData.map(thumb => <Thumbnail isDummyMode data={thumb} />)}

      {!isLoading &&
        !isDummyMode &&
        Object.keys(movies).map((movieKey, movieIdx) => {
          const movie = movies[movieKey],
            previewPresent =
              expandedMovie &&
              previewToBeInsertedAfter >= 0 &&
              previewToBeInsertedAfter === movieIdx,
            isHighlighted = expandedMovie && movieKey === expandedMovie.mediaID;

          return (
            <>
              {previewPresent && <Preview expandedMovie={expandedMovie} />}
              <Thumbnail
                data={{ ...movie, thumbIdx: movieIdx }}
                key={movies[movieKey].videoID}
                onThumbnailClick={onThumbnailClick}
                highlighted={isHighlighted}
              />
            </>
          );
        })}
    </div>
  );
}
