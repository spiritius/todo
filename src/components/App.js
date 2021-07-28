import React from 'react';
import data from './data.js';
import TaskList from './TaskList'


class App extends React.Component {
	state = {
		tasks: data
	}

	render() {
		return (
			<div className="container">
				<h1 className="h4">list of tasks</h1>
				<TaskList data={this.state.tasks}/>
			</div>
		)
	}
}

export default App;