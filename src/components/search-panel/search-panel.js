import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

  render() {
    const { onSearch } = this.props;
    return (
      <form className="search-form">
        <input type="text"
          className="form-control search-input"
          placeholder="search" 
          onChange={onSearch}
        />
      </form>
    );
  };
};