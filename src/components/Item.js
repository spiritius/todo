import React from 'react';

export default class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.data.id,
			title: this.props.data.title,
			createDate: this.props.data.createDate,
			isDone: this.props.data.isDone,
		};
		this.stateChange = this.stateChange.bind(this);
	}

	stateChange = (key, value) => {
		this.setState({
			[key]: value
		});
		console.log('-- inside: ' + this.state.title);
		this.props.onChange(this.state);
	}

	render() {
		// const {id, createDate, title, isDone} = this.props.data;

		return (
			<div className="form-check my-2 d-flex flex-row align-items-center">
				<input 
					type="checkbox" 
					className="form-check-input" 
					id={this.state.id} 
					name="isDone"
					onChange={(e) => this.stateChange(e.target.name, e.target.checked)}
					/>
				<div className="ps-3">
					<small className="text-muted d-block"># {this.state.id} &middot; {this.state.createDate}</small>
					<input 
						type="text" 
						value={this.state.title} 
						name="title"
						placeholder="type something..." 
						onChange={(e) => this.stateChange(e.target.name, e.target.value)}
						// onChange={(e) => this.props.onChange(this.state.id, e.target.value, this.state.createDate, this.state.isDone)}
						/>
				</div>
			</div>
		)
	}
}