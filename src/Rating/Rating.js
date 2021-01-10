import React from "react";
import PropTypes from "prop-types";
import "./Rating.css";

export default function Rating(props) {
  const stars = [0, 0, 0, 0, 0].map((_, i) =>
    i < props.value ? (
      <span key={i}>&#9733; </span>
    ) : (
      <span key={i}>&#9734; </span>
    )
  );
  return <div className="rating">{stars}</div>;
}

// add special propTypes property to the component to prevent a user from passing invalid values to the prop
Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

Rating.propTypes = {
  value: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
};
