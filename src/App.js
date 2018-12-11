import React, { useState } from "react";
import { useVideoQueue, useToggle } from "./hooks";
import Video from "./components/Video";
import Controls from "./components/Controls";
import Selector from "./components/Selector";
import History from "./components/History";
import NowPlaying from "./components/NowPlaying";
import { MyContext } from "./context";
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
    <MyContext.Provider
      value={{
        currentVideo,
        nextVideo,
        autoplay,
        setHistory,
        history,
        toggleAutoplay,
        toggleSelector
      }}
    >
      <div className="wrapper">
        <h1>Reddit Playlist</h1>
        <div className="videoWrapper">
          <Video />
          <Controls />
        </div>
        <div className="footer">
          <Selector
            show={showSelector}
            handleSubredditChange={newSubreddit => {
              window.location.href = decodeURIComponent(newSubreddit);
            }}
          />
          <NowPlaying subreddit={subreddit} />
          <History entries={history} />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
