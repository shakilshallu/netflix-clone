import React from "react";
import "./banner.css";

const Banner = ({ clas, children, img, video, vidSize }) => {
  return (
    <div className="single-banner">
      <div className={`content-section ${clas}`}>{children}</div>
      <div className="image-section" >
        <img src={img} alt="banner img" className="banner-image" />
        {video && (
          <div className="video-section">
            <video
              className={vidSize}
              src={video}
              alt="video-1"
              muted
              autoPlay
              loop
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;