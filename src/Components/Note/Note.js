import React, { Component } from "react";
import "./Note.css";

class Note extends Component {
  constructor({ props, note, addToNotes, removeFromNotes }) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    const { note } = this.props;
    return (
      <div className="note-card">
        <div className="note-text">
          <h3>{note.title}</h3>
          <p>{note.body}</p>
        </div>
        <div className="note-dots">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default Note;
