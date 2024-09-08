import React, { Component } from "react";
import Book from "./Book";
import "./AddForm.css";

export default class AddForm extends Component {
  constructor() {
    super();

    this.state = {
      books: [],

      title: "",
      author: "",
      year: "",
    };
  }
  titleHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }
  authorHandler(event) {
    this.setState({
      author: event.target.value,
    });
  }
  yearHandler(event) {
    this.setState({
      year: event.target.value,
    });
  }

  submitBook(event) {
    event.preventDefault();
    const { title, author, year } = this.state; // store title, author, and year in variables

    if (!title || !author || !year) {
      alert("Please Fill All Fields");
    } else {
      let newBook = {
        id: this.state.books.length + 1,
        title: this.state.title,
        author: this.state.author,
        year: this.state.year,
      };

      this.setState((prevState) => ({
        books: [...prevState.books, newBook], // Append the new book to the books array
        title: "",
        author: "",
        year: "",
      }));
    }
  }

  render() {
    return (
      <>
        <form
          id="book-form"
          autoComplete="off"
          onSubmit={(event) => this.submitBook(event)}
        >
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={this.state.title}
              onChange={(event) => {
                this.titleHandler(event);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              className="form-control"
              value={this.state.author}
              onChange={(event) => {
                this.authorHandler(event);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="text"
              id="year"
              className="form-control"
              value={this.state.year}
              onChange={(event) => {
                this.yearHandler(event);
              }}
            />
          </div>
          <input
            type="submit"
            value="Add Book"
            className="btn btn-warning btn-block add-btn"
          />
        </form>
        <table className="table table-striped mt-5 text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody id="book-list">
            {this.state.books.map((book) => (
              <Book key={book.id} {...book} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
