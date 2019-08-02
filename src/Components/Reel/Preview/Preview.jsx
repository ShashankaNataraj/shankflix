import React from "react";
import ReactHLS from "react-hls";
import "./Preview.scss";
export default function Preview(props) {
  return (
    <div className="preview-container">
      <div className="preview">
        <ReactHLS
          url={props.expandedMovie.videoURL}
          autoplay
          className="video"
          videoProps={{
            height: "100%",
            width: (window.innerWidth * 98) / 100
          }}
        />
      </div>
    </div>
  );
}
