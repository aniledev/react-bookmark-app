// import react
import React, { Component } from "react";
// import css file
import "./Rating.css";
// import Bookmark app component
import BookmarkApp from "./BookmarkApp/BookmarkApp";
// import AddBookmark component
import AddBookmark from "./AddBookmark/AddBookmark";

// create sample test data
const bookmarks = [
  {
    title: "Thinkful",
    url: "http://www.thinkful.com",
    rating: "5",
    description: "A place to receive great programming instruction"
  },
  {
    title: "Google",
    url: "http://www.google.com",
    rating: "3",
    description: "Where to go for all your coding problems"
  }
];

// construct class component with two children components

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AddBookmark />
        <BookmarkApp bookmarks={bookmarks} />
      </div>
    );
  }
}
