import React, { useState } from "react";
import getRedditPath from "../lib/getRedditPath";

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
