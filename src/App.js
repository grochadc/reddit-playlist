import React from "react";
import YouTube from "react-youtube";
import useVideoQueue from "./hooks";

function App() {
  const [currentVideo, nextVideo] = useVideoQueue("treemusic");
  return (
    <div>
      <YouTube
        videoId={currentVideo}
        onEnd={() => nextVideo()}
        opts={{ playerVars: { autoplay: 1 } }}
      />
    </div>
  );
}

export default App;
