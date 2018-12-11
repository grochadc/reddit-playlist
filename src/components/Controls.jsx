import React, { useContext } from "react";
import { MyContext } from "../context";

export default function() {
  const context = useContext(MyContext);
  return (
    <div className="controls">
      <span className="skipButtonContainer">
        <button onClick={context.nextVideo}>Skip</button>
      </span>
      <span>
        <label>Autoplay: </label>
        <input
          type="checkbox"
          checked={context.autoplay}
          onClick={() => context.toggleAutoplay()}
        />
      </span>
      <span>
        <button className="link" onClick={context.toggleSelector}>
          Want another subreddit?
        </button>
      </span>
    </div>
  );
}
