import React from "react";
import "./NotesContainer.css";
import Note from "../Note/Note";
import NoteForm from "../NoteForm/NoteForm";

const NotesContainer = (props) => {
  const { notes, addToNotes, removeFromNotes, token } = props;
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
        <NoteForm 
          notes={notes} 
          addToNotes={addToNotes}
          token={token} />
        {notes.length ? (
          displayedNotes
        ) : (
          <p className="no-notes-saved">You currently have no notes saved.</p>
        )}
      </div>
    </div>
  );
}

export default NotesContainer;
