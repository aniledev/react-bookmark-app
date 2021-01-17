// import react component
import React from "react";

// import css file
import "./BookmarkItem.css";
// import children components
import Rating from "../Rating/Rating";

// create function component with children component

export default function BookmarkItem(props) {
  return (
    <div className="BookmarkItem">
      <div className="BookmarkItem__row">
        <div className="BookmarkItem__title">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        </div>
        <Rating value={props.rating} />
      </div>
      <div className="BookmarkItem__description">{props.description}</div>
    </div>
  );
}
