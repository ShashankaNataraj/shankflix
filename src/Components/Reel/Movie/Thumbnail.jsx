import React from "react";
import "./Thumbnail.scss";
import { useStateValue } from "../../../State";
import Constants from "../../../Constants";

export default function Thumbnail(props) {
  const [{}, dispatch] = useStateValue();
  return (
    //{props.data.smallImageURL}alt={props.data.title}
    <div
      className="thumbnail"
      onClick={(evt, movie) => {
        dispatch({
          type: "setExpandedMovie",
          expandedMovie: props.data
        });
      }}
    >
      <img src="" />
      {props.data.title}
    </div>
  );
}
