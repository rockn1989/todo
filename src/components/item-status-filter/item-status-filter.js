import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {

	constructor() {
		super();
		this.buttons = [
			{ label: `All`, name: `all` },
			{ label: `Active`, name: `active` },
			{ label: `Done`, name: `done` },
		];
	}

  render() {
		const { filter, onFilterChange } = this.props;
		const buttons = this.buttons.map(({label, name}) => {
			const isActive = filter.toLowerCase() === name;
			const clazz = isActive ? `btn-info` : `btn-outline-secondary`;
			return (
				<button 
					type="button" 
					className={`btn ${clazz}`}
					key={name}
					onClick={() => { onFilterChange(name); }}
				>{label}</button>
			);
		});



    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}
