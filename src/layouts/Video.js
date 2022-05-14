import React from "react";
import styles from "scss/layout/Video.module.scss";
import video from "assets/images/video.mp4";

function Video() {
  return (
    <div className={`${styles.wrapper} py-100px`}>
      <div className="container-wrapper">
        <header className="mb-50px">
          <p className="fs-18px weight-7 green text-center mb-10px">
            cryptobeauties
          </p>
          <h1 className="fs-54px weight-7 text-center">Video</h1>
        </header>

        <main>
          <video src={video} controls></video>
        </main>
      </div>
    </div>
  );
}

export default Video;
