import React from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends React.Component {
	renderTaskList = () => {
		const {data} = this.props;
		let taskItem = null;

		if (data.length) {
			taskItem = data.map(function(item){
				return (<TaskItem key={item.id} data={item} />)
			});
		} else {
			taskItem = <p>Hooray! All done.</p>
		}

		return taskItem;
	}

	render() {
		return (
			<div>{this.renderTaskList()}</div>
		)
	}
}