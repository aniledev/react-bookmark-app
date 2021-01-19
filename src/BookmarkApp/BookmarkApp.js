// import react component
import React, { Component } from "react";
// import css file
import "./BookmarkApp.css";
// bookmark list component
import BookmarkList from "../BookmarkList/BookmarkList";
// import fab component
import Fab from "../Fab/Fab";

// create class component with children component bookmarklist and fab

export default class BookmarkApp extends Component {
  render() {
    return (
      <div className="BookmarkApp">
        <h2>Bookmarks</h2>
        <BookmarkList bookmarks={this.props.bookmarks} />
        <Fab showForm={this.props.showForm} />
      </div>
    );
  }
}
