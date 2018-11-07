export default function getRedditPath(url) {
  if (url.indexOf(".com") > -1) {
    return url.substr(url.indexOf(".com") + 5);
  } else if (url.indexOf("r/") === 0) {
    return url;
  } else {
    return `r/${url}`;
  }
}
