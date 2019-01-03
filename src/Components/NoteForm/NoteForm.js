import React, { Component } from "react";
import "./NoteForm.css";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { title, body } = this.state;
    return (
      <div className="note-form-literal">
        <form onSubmit={this.handleSubmit}>
          <input
            className="title-input"
            name="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Title"
            autoComplete="off"
          />
          <input
            className="body-input"
            name="body"
            placeholder="Body"
            value={body}
            onChange={this.handleChange}
            autoComplete="off"
          />
          <button onClick={this.handleSubmit} className="submit-note">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
