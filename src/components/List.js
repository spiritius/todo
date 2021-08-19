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

	itemChanged = (item) => {
		// console.log('--- ' + item.title);
		// console.log('--- ' + !item.isDone);
		const temp = this.state.data;
		for (let i=0; i <= temp.length; i++) {
			if (temp[i].id == item.id) {
				temp[i].title = item.title;
				temp[i].createDate = item.createDate;
				temp[i].isDone = !item.isDone;
				break;
			}
		}
		this.setState({data: temp});
		console.log('-- outside: ' + this.state.data[0].title);
	}

	renderList() {
		const data = this.state.data;
		let items = null;

		if (data.length) {
			items = data.map((item) => {
				return (<Item key={item.id} data={item} onChange={(item) => this.itemChanged(item)} />)
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