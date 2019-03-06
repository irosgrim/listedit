import React, { Component } from 'react';
import Editor from './components/Editor';
import Notes from './components/Notes';

import './components/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleClicked = this.handleClicked.bind(this);
		this.state = {
			values: [
				{ id: 0, title: 'First entry', note: 'Hello world' },
				{ id: 1, title: 'Second', note: 'This is note two' },
				{ id: 2, title: 'Third', note: 'Entry number three' },
				{ id: 3, title: 'Fourth', note: 'Note number 4' }
			],
			selected: {}
		};
	}
	handleEdit(e) {
		console.log(e.target.value);
	}
	handleClicked(e) {
		this.setState({ selected: e });
	}
	render() {
		return (
			<div className="App">
				<h3>The App component</h3>
				<p>Selected state value: {this.state.selected.note}</p>
				<pre>
					{`this.state = {
            values: [
                      { id: 0, title: 'First entry', note: 'Hello world' }, 
                      { id: 1, title: 'Second', note: 'This is note two' },
                      { id: 2, title: 'Third', note: 'Entry number three' },
                      { id: 3, title: 'Fourth', note: 'Note number 4' }
                    ],
            selected: { id: ${this.state.selected.id}, title: '${
						this.state.selected.title
					}', note: '${this.state.selected.note}' }
            };
          `}
				</pre>

				<div className="wrapper">
					<Notes
						values={this.state.values}
						clicked={this.handleClicked}
						className="list frame">
						The notes component
					</Notes>
					<Editor handleedit={this.handleEdit} selected={this.state.selected} />
				</div>
			</div>
		);
	}
}

export default App;
