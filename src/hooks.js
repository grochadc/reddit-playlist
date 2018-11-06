import { useState, useEffect } from "react";
import axios from "axios";
import getYoutubeId from "./lib/getYoutubeId";
const treemusic = require("./treemusic.json");

export const useAutoplay = initial => {
  const [togglesState, toggle] = useState(initial);
  function triggerToggle() {
    toggle(!togglesState);
  }
  const autoplay = togglesState ? 1 : 0;
  return [autoplay, triggerToggle];
};

export function useVideoQueue(subreddit) {
  const [queue, setQueue] = useState([]);
  const [index, setIndex] = useState(0);
  const increment = () => setIndex(index + 1);
  useEffect(() => {
    axios(`https://www.reddit.com/${subreddit}.json`)
      .then(({ data }) => data)
      .catch(() => treemusic)
      .then(({ data }) => {
        const links = data.children
          .filter(
            ({ data }) =>
              data.domain === "youtu.be" || data.domain === "youtube.com"
          )
          .map(
            ({ data }) =>
              data.domain === "youtu.be"
                ? data.url.substr(data.url.lastIndexOf("/") + 1)
                : getYoutubeId(decodeURIComponent(data.url))
          );
        setQueue(links);
      });
  }, []);
  return [queue[index], increment];
}
