import { useState, useEffect } from "react";
import axios from "axios";
import getYoutubeId from "./lib/getYoutubeId";

export default function useVideoQueue(subreddit) {
  const [queue, setQueue] = useState([]);
  const [index, setIndex] = useState(0);
  const increment = () => setIndex(index + 1);
  useEffect(async () => {
    const { data } = await axios(`https://www.reddit.com/r/${subreddit}.json`);
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
  return [queue[index], increment];
}
