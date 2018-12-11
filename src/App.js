import React, { useState } from "react";
import YouTube from "react-youtube";
import { useVideoQueue, useToggle } from "./hooks";
import Selector from "./components/Selector";
import History from "./components/History";
import "./App.css";

function App() {
  const path = window.location.pathname.substr(1);
  //Search is for reddit parameters like top/?t=all
  const subreddit = path
    ? { path, search: window.location.search }
    : { path: "r/treemusic", search: "" };
  const [currentVideo, nextVideo] = useVideoQueue(subreddit);
  const [autoplay, toggleAutoplay] = useToggle(true);
  const [showSelector, toggleSelector] = useToggle(false);
  const [history, setHistory] = useState([]);
  return (
    <div className="wrapper">
      <h1>Reddit Playlist</h1>
      <div className="videoWrapper">
        <YouTube
          videoId={currentVideo}
          onPlay={({ target }) => {
            let duration = target.getDuration();
            if (duration > 600) {
              console.log("Skipping video beacuse is longer than 10 mins");
              nextVideo();
            } else {
              let { title, video_id } = target.getVideoData();
              document.title = title;
              setHistory([...history, { title, video_id }]);
              console.log("History", history);
            }
          }}
          onEnd={() => nextVideo()}
          onError={err => {
            console.log("error on video", err.data);
            nextVideo();
          }}
          opts={{ playerVars: { autoplay } }}
          containerClassName="videoContainer"
        />
        <div className="controls">
          <span className="skipButtonContainer">
            <button onClick={nextVideo}>Skip</button>
          </span>
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
        <button className="link" onClick={toggleSelector}>
          Want another subreddit?
        </button>
        {showSelector ? (
          <Selector
            handleSubredditChange={newSubreddit => {
              window.location.href = decodeURIComponent(newSubreddit);
            }}
          />
        ) : null}
        <History entries={history} />
      </div>
    </div>
  );
}

export default App;
