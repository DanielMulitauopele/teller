import React, { Component } from 'react'
import './NotesContainer.css'
import Note from '../Note/Note'

class NotesContainer extends Component {
  constructor({ props, notes, addToNotes, removeFromNotes }) {
    super(props)
  }

  render() {
    const { notes, addToNotes, removeFromNotes } = this.props
    const displayedNotes = notes.map((note, i) => {
      return(
        <Note
          key={i}
          note={note} 
          addToNotes={addToNotes}
          removeFromNotes={removeFromNotes}
        />
      )
    })
    return(
      <div>
        {notes.length? displayedNotes : <p>No notes saved.</p>}
      </div>
    )
  }
}

export default NotesContainer
