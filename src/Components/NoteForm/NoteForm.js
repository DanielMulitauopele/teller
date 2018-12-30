import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      body: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //submit note to backend
  }

  render() {
    const { title, body } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='title'
          value={title}
          onChange={this.handleChange} />
        <input
          name='body'
          value={body}
          onChange={this.handleChange} />
        <button></button>
      </form>
    )
  }
}

export default NoteForm