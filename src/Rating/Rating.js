// import react component
import React from "react";
// import css files
import "./Rating.css";

// create function component
// unicode &#9733 is a filled in star; &#9734 is an unfilled in star
export default function Rating(props) {
  const stars = [0, 0, 0, 0, 0].map((_, i) =>
    i < props.value ? (
      <span key={i}>&#9733;</span>
    ) : (
      <span key={i}>&#9734;</span>
    )
  );
  return <div className="Rating">{stars}</div>;
}
