import React from "react";
import YouTube from "react-youtube";
import { useVideoQueue, useAutoplay } from "./hooks";
import "./App.css";

function App() {
  const path = window.location.pathname.substr(1);
  const subreddit = path ? path : "r/treemusic";
  const [currentVideo, nextVideo] = useVideoQueue(subreddit);
  const [autoplay, toggleAutoplay] = useAutoplay(true);
  return (
    <div className="wrapper">
      <h1>Reddit Playlist</h1>
      <YouTube
        videoId={currentVideo}
        onEnd={() => nextVideo()}
        opts={{ playerVars: { autoplay } }}
        containerClassName="videoContainer"
      />
      <h2>Now playing: {subreddit}</h2>
      <br />
      <label>Autoplay:</label>
      <input
        type="checkbox"
        checked={autoplay}
        onClick={() => toggleAutoplay()}
      />
    </div>
  );
}

export default App;
