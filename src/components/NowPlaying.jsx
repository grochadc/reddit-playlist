import React from "react";
import PropTypes from "prop-types";

const NowPlaying = function(props) {
  return (
    <h2>
      Now playing:{" "}
      <a
        href={`http://reddit.com/${props.subreddit.path}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.subreddit.path + props.subreddit.search}
      </a>
    </h2>
  );
};
NowPlaying.propTypes = {
  subreddit: PropTypes.object.isRequired
};

export default NowPlaying;
