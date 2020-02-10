import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.maxId = 100;
    
    this.state = {
      todoData: [
        this.createTodoItem(`Drin Coffee`),
        this.createTodoItem(`Make Awesome App`),
        this.createTodoItem(`Mike App`),
        this.createTodoItem(`Have a lunch`)
      ],
      term: '',
      field: ''
    };

    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex(el => el.id === id);
        const newArray = [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1)
        ];

        return {
          todoData: newArray
        };
      });
    };

    this.addItem = (text) => {
      const newItem = this.createTodoItem(text);

      this.setState(({ todoData }) => {
        const newArray = [...todoData, newItem];
        return {
          todoData: newArray
        };
      });
    };

    this.toggleProperty = (arr, id, propName) => {
      const idx = arr.findIndex(el => el.id === id);

      const oldItem = arr[idx];
      const newItem = {
        ...oldItem,
        [propName]: !oldItem[propName]
      };

      return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    };

    this.onToggleImportant = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, `important`)
        };
      });
    };

    this.onToggleDone = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, id, `done`)
        };
      });
    };

    this.updateState = (array) => {
      this.setState(({ todoData }) => {
        const newArray = [...array]
        return {
          todoData: newArray
        }
      });
    };

    this.onSearchChange = (term) => {
      this.setState({term});
    };

    this.search = (items, term) => {
      if(term.length === 0) {
        return items;
      }
      return items.filter((item) => {
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
      });
    };

    this.onSortChange = (field) => {
      this.setState({
        field: field
      });
    };

    this.onSort = (items, field) => {
        let todos = [];

        switch (field) {
          case `active`: todos = items.filter(({ done }) => !done);
            break;
          case `done`: todos = items.filter(({ done }) => done);
            break;
          default:
            todos = [...items];
        };

        return todos;
    }
  }



  createTodoItem = label => {
    return {
      label: label,
      important: false,
      done: Boolean(Math.round(Math.random() * 1)),
      id: this.maxId++
    };
  };

  render() {
    const { todoData, term, field } = this.state;

    const visibleItems = this.search(todoData, term);
    const sortedItems = this.onSort(todoData, field);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    const todoCountAll = todoData.length;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} todos={todoCountAll} />

        <div className="top-panel d-flex">
          <SearchPanel 
            onSearchChange={this.onSearchChange}
          />
          <ItemStatusFilter 
            data={sortedItems}
            onSortChange={this.onSortChange}
          />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <ItemAddForm 
          onItemAddItem={this.addItem}
          updateState={this.updateState}
        />
      </div>
    );
  }
}
