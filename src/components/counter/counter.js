import React from "react";
import "./counter.css";

const Counter = ({count}) => {
		return (
			<div className="todo-list-counter">
				Всего задач: <span>{count.length}</span>
			</div>
		);

}

export default Counter;