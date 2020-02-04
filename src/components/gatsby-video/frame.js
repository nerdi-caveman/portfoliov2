import React from "react"
const Frame = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className=" video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer: autoplay; encrypted-meida; gyroscope: picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Frame