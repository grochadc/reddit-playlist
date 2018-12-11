import React, { useContext } from "react";
import YouTube from "react-youtube";
import { MyContext } from "../context";

export default function() {
  const context = useContext(MyContext);
  return (
    <YouTube
      videoId={context.currentVideo}
      onPlay={({ target }) => {
        let duration = target.getDuration();
        if (duration > 600) {
          console.log("Skipping video beacuse is longer than 10 mins");
          context.nextVideo();
        } else {
          let { title, video_id } = target.getVideoData();
          document.title = title;
          context.setHistory([...context.history, { title, video_id }]);
        }
      }}
      onEnd={() => context.nextVideo()}
      onError={err => {
        console.log("error on video", err.data);
        context.nextVideo();
      }}
      opts={{ playerVars: { autoplay: context.autoplay } }}
      containerClassName="videoContainer"
    />
  );
}
