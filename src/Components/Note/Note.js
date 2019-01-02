import React, { Component } from 'react'
import './Note.css'

class Note extends Component {
  constructor({ props, note, addToNotes, removeFromNotes }) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  render() {
    const { note } = this.props
    return(
      <div>
        <h2>{note.title}</h2>
        <p>{note.body}</p>
      </div>
    )
  }
}

export default Note
