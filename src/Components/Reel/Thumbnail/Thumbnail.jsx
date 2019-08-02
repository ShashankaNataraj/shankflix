import React from "react";
import "./Thumbnail.scss";
import { useStateValue } from "../../../State";
import Constants from "../../../Constants";
import LazyLoad from "react-lazyload";

export default function Thumbnail(props) {
  const [{}, dispatch] = useStateValue();
  return (
    <div
      className={`thumbnail ${props.highlighted ? "highlighted" : ""}`}
      onClick={(evt, movie) => props.onThumbnailClick(evt, movie, props.data)}
    >
      {!props.isDummyMode && (
        <LazyLoad once={true}>
          <img src={props.data.smallImageURL} alt={props.data.title} />
        </LazyLoad>
      )}
      {props.isDummyMode && (
        <div className="dummy-image">
          <i className="fa fa-film" />
        </div>
      )}
      <div className="thumbnail-container">
        <div className="thumbnail-title">{props.data.title}</div>
        <div className="arrow-left" />
        {props.highlighted && <div className="arrow-top" />}
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
