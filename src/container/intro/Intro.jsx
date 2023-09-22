import { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import "./Intro.css";
import { videos } from "../../constants";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const handleVideo = () => {
    setPlayVideo((previousValue) => !previousValue);
    if (playVideo) videoRef.current.pause();
    else videoRef.current.play();
  };

  return (
    <div className="app__video">
      <video
        src={videos.introduction}
        ref={videoRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#FFF" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#FFF" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
