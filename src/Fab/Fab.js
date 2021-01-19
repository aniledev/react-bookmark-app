// import react component
import React from "react";
// import css files
import "./Fab.css";

// create function component
export default function Fab() {
  return (
    <div className="Fab" onClick={e => this.props.showForm(true)}>
      &#43;
    </div>
  );
}
