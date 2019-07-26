import React from "react";
import "./Thumbnail.scss";
import { useStateValue } from "../../../State";
import Constants from "../../../Constants";
import LazyLoad from "react-lazyload";

export default function Thumbnail(props) {
  const [{}, dispatch] = useStateValue();
  return (
    <div
      className="thumbnail"
      onClick={(evt, movie) => {
        dispatch({
          type: "setExpandedMovie",
          expandedMovie: props.data
        });
      }}
    >
      <LazyLoad>
        <img src={props.data.smallImageURL} alt={props.data.title} />
      </LazyLoad>
      <div className="thumbnail-title">{props.data.title}</div>
    </div>
  );
}
