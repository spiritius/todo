import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1 className="h4 mb-4">list of tasks</h1>
				<List/>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));