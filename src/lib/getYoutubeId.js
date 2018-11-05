export default function(url) {
  return url.substr(url.indexOf("watch?v=") + 8, 11);
}
