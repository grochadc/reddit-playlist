import React from "react";
import YouTube from "react-youtube";
import { useVideoQueue, useAutoplay } from "./hooks";
import Selector from "./components/Selector";
import "./App.css";

function App() {
  const path = window.location.pathname.substr(1);
  //Search is for reddit parameters like top/?t=all
  const subreddit = path ? {path, search: window.location.search } : {path: "r/treemusic", search:""};
  const [currentVideo, nextVideo] = useVideoQueue(subreddit);
  const [autoplay, toggleAutoplay] = useAutoplay(true);
  return (
    <div className="wrapper">
      <h1>Reddit Playlist</h1>
      <YouTube
        videoId={currentVideo}
        onEnd={() => nextVideo()}
        onError={(err) => {
          console.log('error on video', err.data)
          nextVideo()
        }}
        opts={{ playerVars: { autoplay } }}
        containerClassName="videoContainer"
      />
      <div className="footer">
        <h2>
          Now playing:{" "}
          <a
            href={`http://reddit.com/${subreddit}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {subreddit.path + subreddit.search}
          </a>
        </h2>
        <br />
        <div className="controls">
          <Selector
            handleSubredditChange={
              (newSubreddit) => {
                window.location.href = decodeURIComponent(newSubreddit)
              }
            }
          />
          <span>
            <label>Autoplay: </label>
            <input
              type="checkbox"
              checked={autoplay}
              onClick={() => toggleAutoplay()}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
