import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      term: ''
    };
  }

  onSearch(value, data) {
    const oldArray = [...this.data];
    const newArray = data.filter(({ label }) => {
      return label.toLowerCase().includes(value);
    });

    value.length <= 0 ? this.updateState(oldArray) : this.updateState(newArray);
    
  }

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({
      term: term
    });
    this.props.onSearchChange(term);
  }

  render() {
    return (
      <form className="search-form">
        <input type="text"
          className="form-control search-input"
          placeholder="search" 
          value={this.state.term}
          onChange={this.onSearchChange}
        />
      </form>
    );
  };
};