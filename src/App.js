// import react
import React, { Component } from "react";
// import css file
import "./App.css";
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
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }

  // WHY USE COMPONENT DID MOUNT TO FETCH DATA????
  componentDidMount() {
    const url = "https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks";

    // create an oject which represnts some options for the HTTP call
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer $2a$10$v7WjV5QEI09kAQXgN6/S0./knIrLHeGq47N6y0a0VlVUbtPSxUwBC",
        "Content-Type": "application/json"
      }
    };

    // use the fetch method to fetch data from the server and update the state with the new information
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong. Please try again.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          bookmarks: data,
          error: null
        });
      })
      // use catch to catch all erors and update state
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  // add conditional display based on state
  render() {
    const page = this.state.showAddForm ? (
      <AddBookmark />
    ) : (
      <BookmarkApp bookmarks={this.state.bookmarks} />
    );

    return <div className="App">{page}</div>;
  }
}
