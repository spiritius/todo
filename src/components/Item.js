import React from 'react';

export default class Item extends React.Component {

	render() {
		const {id, title, isDone} = this.props.data;

		return (
			<div className="form-check my-2 d-flex flex-row align-items-center">
				<input 
					type="checkbox" 
					className="form-check-input" 
					id={id} 
					name="isDone"
					checked={isDone}
					onChange={(e) => this.props.onChange(id, e.target.name, e.target.checked)}
					/>
				<div className="ps-3 flex-fill">
					<input 
						type="text" 
						value={title} 
						name="title"
						placeholder="type something..." 
						disabled={this.props.data.isDone ? true : false}
						className={"form-control " + (this.props.data.isDone ? "form-control-done" : "")}
						onChange={(e) => this.props.onChange(id, e.target.name, e.target.value)}
						/>
				</div>
			</div>
		)
	}
}