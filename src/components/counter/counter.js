import React, { Component } from "react";
import "./counter.css";

/* export default class Counter extends Component {
  render() {
		const { count } = this.props;

    return (
      <div className="todo-list-counter">
				Всего задач: <span>{count.length}</span>
      </div>
    );
  }
}
 */

const Counter = ({count}) => {
		return (
			<div className="todo-list-counter">
				Всего задач: <span>{count.length}</span>
			</div>
		);

}

export default Counter;