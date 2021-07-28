import React from 'react';

export default class TaskItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {title: this.props.data.title};
	}

	handleOnChange = (e) => {
		this.setState({
			title: e.currentTarget.value
		})
	}

	render() {
		const {id, createDate} = this.props.data;

		return (
			<div className="form-check my-2 d-flex flex-row align-items-center">
				<input 
					type="checkbox" 
					className="form-check-input" 
					value="" 
					id={id} 
					name={id} />
				<div className="ps-3">
					<small className="text-muted d-block"># {id} &middot; {createDate}</small>
					<input 
						type="text" 
						value={this.state.title} 
						placeholder="type something..." 
						onChange={this.handleOnChange} />
				</div>
			</div>
		)
	}
}