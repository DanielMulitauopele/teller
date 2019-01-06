import React, { Component } from "react";
import "./Search.css";
import SearchGlass from "../../Assets/search.svg";
import Cancel from "../../Assets/cancel.svg";

class Search extends Component {
  constructor(props) {
    super(props);

    // const { displaySearch } = this.props
    
    this.state = {
      active: false,
      hasText: false,
      search: ""
    };
  }

  toggleSearchBtn = () => {
    this.setState({
      active: !this.state.active
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target
    const { search } = this.state
    this.setState({ [name]: value })
    this.props.displaySearch(search)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { search } = this.state
    this.props.displaySearch(search)
  }

  render() {
    const { active, search } = this.state;
    return (
      <div className="bigger-box">
        <div className={active ? "search-button-active" : "search-button"}>
          <img
            className="search-image"
            src={active ? Cancel : SearchGlass}
            onClick={this.toggleSearchBtn}
            alt=""
          />
          <form 
            className="search-form"
            onSubmit={this.handleSubmit}>
            <input 
              className="search-bar" 
              type="text" 
              placeholder="Search"
              name="search"
              value={search}
              onChange={this.handleChange}
              pattern="[a-zA-Z0-9!@#$%^*_|]{6,25}"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
