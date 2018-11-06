import React from "react";
import YouTube from "react-youtube";
import useVideoQueue from "./hooks";

function App() {
  const subreddit = window.location.pathname.substr(1);
  const [currentVideo, nextVideo] = useVideoQueue(
    subreddit ? subreddit : "r/treemusic"
  );
  return (
    <YouTube
      videoId={currentVideo}
      onEnd={() => nextVideo()}
      opts={{ playerVars: { autoplay: 1 } }}
    />
  );
}

export default App;
