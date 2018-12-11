import React from "react";

export default function(props) {
  return (
    <h2>
      Now playing:{" "}
      <a
        href={`http://reddit.com/${props.subreddit}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.subreddit.path + props.subreddit.search}
      </a>
    </h2>
  );
}
