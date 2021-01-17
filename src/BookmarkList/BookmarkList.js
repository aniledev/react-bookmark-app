// import react component
import React, { Component } from "react";

// import css file
import "./BookmarkList.css";
// import Bookmark component
import BookmarkItem from "../BookmarkItem/BookmarkItem";

// create class component that takes in props of bookmarks={this.props.bookmarks} from BookmarkApp
export default class BookmarkList extends Component {
  render() {
    // if you already have props as a object, and you want to pass it in JSX, you can use .. as a "spread" operator to pass the whole props object
    const bookmarks = this.props.bookmarks.map((bookmark, i) => (
      <BookmarkItem {...bookmark} key={i} />
    ));

    // for each of the bookmarks in the const variable array, we're creating a BookmarkItem component and passing in the object as a prop and giving each oe a unique ke
    return <div className="BookmarkList">{bookmarks}</div>;
  }
}

// set default props for this component
BookmarkList.defaultProps = {
  bookmarks: []
};
