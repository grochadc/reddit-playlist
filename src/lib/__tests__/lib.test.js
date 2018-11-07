import getRedditPath from "../getRedditPath";
import getYoutubeId from "../getYoutubeId";

describe("getRedditPath", () => {
  it("returns the subreddit path", () => {
    expect(getRedditPath("r/treemusic")).toEqual("r/treemusic");
    expect(getRedditPath("reddit.com/r/treemusic")).toEqual("r/treemusic");
    expect(getRedditPath("treemusic")).toEqual("r/treemusic");
  });
});

describe("getYoutubeId", () => {
  it("returns and ID from a youtube url", () => {
    expect(getYoutubeId("https://www.youtube.com/watch?v=jYN4ODpbAm0")).toEqual(
      "jYN4ODpbAm0"
    );
    expect(getYoutubeId("https://youtu.be/jYN4ODpbAm0")).toEqual("jYN4ODpbAm0");
  });
});
