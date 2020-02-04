import React, { Component } from 'react';
import Counter from '../counter';
import './app-header.css';

export default class AppHeader extends Component {

  render() {
    const { toDo, done, todos } = this.props;

    return (
      <div>
        <div className="app-header d-flex">
          <h1>Todo List</h1>
          <h2>{toDo} more to do, {done} done</h2>
        </div>
        <Counter count={todos} />
      </div>
    )
  }
  
};
