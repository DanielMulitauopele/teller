import React, { Component } from "react";
import "./NotesContainer.css";
import Note from "../Note/Note";
import NoteForm from "../NoteForm/NoteForm";

class NotesContainer extends Component {
  constructor({ props, notes, addToNotes, removeFromNotes }) {
    super(props);
  }

  render() {
    const { notes, addToNotes, removeFromNotes } = this.props;
    const displayedNotes = notes.map((note, i) => {
      return (
        <Note
          key={i}
          note={note}
          addToNotes={addToNotes}
          removeFromNotes={removeFromNotes}
        />
      );
    });
    return (
      <div className="notes-container-literal">
        <div className="title-block">
          <h1> Notes </h1>
        </div>
        <div className="notes-container-box">
          <NoteForm addToNotes={addToNotes} />
          {notes.length ? (
            displayedNotes
          ) : (
            <p className="no-notes-saved">You currently have no notes saved.</p>
          )}
        </div>
      </div>
    );
  }
}

export default NotesContainer;
