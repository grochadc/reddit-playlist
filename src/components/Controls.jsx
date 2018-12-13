import React, { useContext } from "react";
import { MyContext } from "../context";
import styled from "styled-components";

const Link = styled.button`
  background: none !important;
  color: inherit;
  border: none;
  padding: 0 !important;
  font: inherit;
  border-bottom: 1px solid #444;
  cursor: pointer;
`;

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
        <Link onClick={context.toggleSelector}>Want another subreddit?</Link>
      </span>
    </div>
  );
}
