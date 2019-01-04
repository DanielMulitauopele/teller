import React, { Component } from "react";
import "./NoteForm.css";
import { sendNote } from "../../Utils/API/"

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
    const { title, body } = this.state
    sendNote(JSON.stringify({
          "title": title,
          "text": body
        }), this.props.token)
    this.props.addToNotes();
    this.setState({ title: "", body: "" });
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
          <button className="submit-note">Submit</button>
        </form>
      </div>
    );
  }
}

export default NoteForm;
