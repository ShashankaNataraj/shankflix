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
      onClick={(evt, movie) => props.onThumbnailClick(evt, movie, props.data)}
    >
      <LazyLoad once={true}>
        <img src={props.data.smallImageURL} alt={props.data.title} />
      </LazyLoad>
      <div className="thumbnail-container">
        <div className="thumbnail-title">{props.data.title}</div>
        <div className="arrow-left" />
        <div className="stats">
          <span className="stat">
            <i className="fa fa-eye" /> {props.data.views}
          </span>
          <span className="stat">
            <i className="fa fa-thumbs-up" /> {props.data.likes}
          </span>
        </div>
      </div>
    </div>
  );
}
