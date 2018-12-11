import React from "react";

export default function(props) {
  return (
    <div className="history">
      <h3>History</h3>
      {props.entries.map(entry => (
        <li>
          <a
            href={`http://youtu.be/${entry.video_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {entry.title}
          </a>
        </li>
      ))}
    </div>
  );
}
