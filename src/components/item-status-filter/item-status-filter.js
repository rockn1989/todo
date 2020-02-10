import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

	onSortChange = (field) => {
		this.props.onSortChange(field);
	};

	render() {

		return (
			<div className="btn-group">
				<button type="button"
						className="btn btn-info"
						onClick={() => {
							this.onSortChange(`all`);
						}}
				>All</button>

				<button type="button"
						className="btn btn-outline-secondary"
						onClick={() => {
							this.onSortChange(`active`);
						}}
				>Active</button>

				<button type="button"
					className="btn btn-outline-secondary"
					onClick={() => {
						this.onSortChange(`done`);
					}}
			>Done</button>
			</div>
		);   
	}

};
