import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import List from './List';

export default class App extends React.Component {
	state = {
		data: data
	}

	render() {
		return (
			<div className="container">
				<h1 className="h4">list of tasks</h1>
				<List data={this.state.data}/>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));