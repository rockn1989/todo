import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  constructor({updateState, data}) {
    super();
    this.updateState = updateState;
    this.data = data;
  }

  onSearch(value, data) {
    const oldArray = [...this.data];
    const newArray = data.filter(({ label }) => {
      return label.toLowerCase().includes(value);
    });

    value.length <= 0 ? this.updateState(oldArray) : this.updateState(newArray);
    
  }

  render() {
    const data = this.props.data;
    return (
      <form className="search-form">
        <input type="text"
          className="form-control search-input"
          placeholder="search" 
          onChange={(e)=> {
            const value = e.target.value;
            this.onSearch(value, data);
          }}
        />
      </form>
    );
  };
};