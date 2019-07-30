import React from "react";
import ReactHLS from "react-hls";
import "./Preview.scss";
export default function Preview(props) {
  return (
    <div className="preview">
      <ReactHLS url={props.expandedMovie.videoURL} autoplay />
    </div>
  );
}
