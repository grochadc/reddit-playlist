import React, { useState } from "react";
import YouTube from "react-youtube";
import useVideoQueue from "./hooks";
import "./App.css";

function App() {
  const subreddit = window.location.pathname.substr(1);
  const [currentVideo, nextVideo] = useVideoQueue(
    subreddit ? subreddit : "r/treemusic"
  );
  const [autoplay, setAutoplay] = useState(true);
  return (
    <div>
      <h1>Now playing: {subreddit}</h1>
      <YouTube
        videoId={currentVideo}
        onEnd={() => nextVideo()}
        opts={{ playerVars: { autoplay: autoplay ? 1 : 0 } }}
        containerClassName="videoContainer"
      />
      <label>Autoplay:</label>
      <input
        type="checkbox"
        checked={autoplay}
        onClick={() => setAutoplay(!autoplay)}
      />
    </div>
  );
}

export default App;
