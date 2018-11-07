import React, { useState } from "react";

function getRedditPath(url) {
  if (url.indexOf(".com") > -1) {
    return url.substr(url.indexOf(".com") + 5);
  } else {
    return url;
  }
}

export default function(props) {
  const [subreddit, setSubreddit] = useState("");
  return (
    <div className="selector">
      <input
        type="text"
        value={subreddit}
        onChange={({ target }) => setSubreddit(target.value)}
      />{" "}
      <button
        onClick={() => props.handleSubredditChange(getRedditPath(subreddit))}
      >
        Get Playlist
      </button>
    </div>
  );
}
