// import react component
import React, { Component } from "react";
// import css files
import "./Fab.css";

// create class component

export default class Fab extends Component {
  render() {
    return (
      <div className="Fab" onClick={e => this.props.showForm(true)}>
        &#43;
      </div>
    );
  }
}
