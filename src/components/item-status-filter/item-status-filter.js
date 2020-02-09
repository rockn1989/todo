import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

	constructor({updateState, data}) {
		super();
		this.update = updateState;
		this.data = data;
	}

	onSort = (status) => {
		let todos = [];
		switch (status) {
			case `active`: todos = this.data.filter(({done}) => done === false);
				break;
			case `done`: todos = this.data.filter(({ done }) => done );
				break;
			default:
				todos = [...this.data]; 
		}
		//this.update(todos);
	}

	render() {
		const { onSort } = this.props;

		return (
			<div className="btn-group">
				<button type="button"
						className="btn btn-info"
						onClick={() => {
							onSort(`all`, this.data);
						}}
				>All</button>

				<button type="button"
						className="btn btn-outline-secondary"
						onClick={() => {
							onSort(`active`, this.data);
						}}
				>Active</button>

				<button type="button"
					className="btn btn-outline-secondary"
					onClick={() => {
						onSort(`done`, this.data);
					}}
			>Done</button>
			</div>
		);   
	}

};
