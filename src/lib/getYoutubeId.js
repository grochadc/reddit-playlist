export default function(url) {
  if (url.indexOf("youtu.be") > -1) {
    return url.substr(url.lastIndexOf("/") + 1);
  } else {
    return url.substr(url.indexOf("watch?v=") + 8, 11);
  }
}
