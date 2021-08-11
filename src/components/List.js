import React from 'react';
import Item from './Item';

export default class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data
		};
		this.itemChanged = this.itemChanged.bind(this);
	}

	itemChanged = (id, title, createDate, isDone) => {
		const temp = this.state.data;
		for (let i=0; i <= temp.length; i++) {
			if (temp[i].id == id) {
				temp[i].title = title;
				temp[i].createDate = createDate;
				temp[i].isDone = isDone;
				break;
			}
		}
		this.setState({data: temp});
	}

	renderList() {
		const data = this.state.data;
		let items = null;

		if (data.length) {
			items = data.map((item) => {
				return (<Item key={item.id} data={item} onChange={(id, title, createDate, isDone) => this.itemChanged(id, title, createDate, isDone)} />)
			});
		} else {
			items = <p>Hooray! All done.</p>
		}

		return items;
	}

	render() {
		return (
			<div>{this.renderList()}</div>
		)
	}
}