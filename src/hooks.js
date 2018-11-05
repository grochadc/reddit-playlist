import { useState, useEffect } from "react";
import axios from "axios";
import getYoutubeId from "./lib/getYoutubeId";
export default function useVideoQueue(subreddit) {
  const redditUrl =
    subreddit.indexOf("r/") > -1 ? subreddit.substr(2) : subreddit;
  const [queue, setQueue] = useState([]);
  useEffect(async () => {
    const { data } = await axios(`https://www.reddit.com/r/${redditUrl}.json`);
    const links = data.data.children
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
  }, []);
  return queue;
}
