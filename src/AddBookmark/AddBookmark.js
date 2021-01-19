// import react component
import React, { Component } from "react";

// import css file
import "./AddBookmark.css";

//create class component

export default class AddBookmark extends Component {
  // add a constructor to initialize state for controlled form component
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      description: "",
      rating: 1
    };
  }

  // write methods to update the state when each of the inputs is changed
  titleChanged(title) {
    this.setState({
      title
    });
  }

  urlChanged(url) {
    this.setState({
      url
    });
  }

  descriptionChanged(description) {
    this.setState({
      description
    });
  }

  ratingChanged(rating) {
    this.setState({
      rating
    });
  }

  // this method will construct a new bookmark object from the values in the state
  handleSubmit(e) {
    e.preventDefault();
    const bookmark = (({ title, url, description, rating }) => ({
      title,
      url,
      description,
      rating
    }))(this.state);
    const URL = "https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks";
    const options = {
      method: "POST",
      body: JSON.stringify(bookmark),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer $2a$10$v7WjV5QEI09kAQXgN6/S0./knIrLHeGq47N6y0a0VlVUbtPSxUwBC"
      }
    };

    fetch(URL, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          title: "",
          url: "",
          description: "",
          rating: 1
        });
        this.props.handleAdd(bookmark);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  // add value prop to each form input so the input always displays whatever value is in the state
  render() {
    const error = this.state.error ? (
      <div className="error">{this.state.error}</div>
    ) : (
      ""
    );

    return (
      <div className="AddBookmark">
        <h2>Add Bookmark</h2>
        <form className="AddBookmark" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={this.state.title}
            onChange={e => this.titleChanged(e.target.value)}
          />
          <label htmlFor="url">Url:</label>
          <input
            type="text"
            name="url"
            id="url"
            placeholder="url"
            value={this.state.url}
            onChange={e => this.urlChanged(e.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            placeholder="description"
            value={this.state.description}
            onChange={e => this.descriptionChanged(e.target.value)}
          />
          <label htmlFor="rating">Rating: </label>
          <input
            type="number"
            name="rating"
            id="rating"
            min="1"
            max="5"
            value={this.state.rating}
            onChange={e => this.ratingChanged(e.target.value)}
          />

          <div className="AddBookmark__buttons">
            <button onClick={e => this.props.showForm(false)}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
