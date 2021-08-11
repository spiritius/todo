import React from 'react';

export default class Item extends React.Component {

	render() {
		const {id, createDate, title, isDone} = this.props.data;

		return (
			<div className="form-check my-2 d-flex flex-row align-items-center">
				<input 
					type="checkbox" 
					className="form-check-input" 
					id={id} 
					name={id} />
				<div className="ps-3">
					<small className="text-muted d-block"># {id} &middot; {createDate}</small>
					<input 
						type="text" 
						value={title} 
						name={`task${id}`}
						placeholder="type something..." 
						onChange={(e) => this.props.onChange(id, e.target.value, createDate, isDone)} />
				</div>
			</div>
		)
	}
}