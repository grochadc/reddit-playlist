import React, { useState } from "react";
import YouTube from "react-youtube";
import useVideoQueue from "./hooks";

function App() {
  const videosQueue = useVideoQueue("r/treemusic");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  return (
    <div>
      <YouTube
        videoId={videosQueue[currentVideoIndex]}
        onEnd={() => setCurrentVideoIndex(currentVideoIndex + 1)}
        opts={{ playerVars: { autoplay: 1 } }}
      />
    </div>
  );
}

export default App;
