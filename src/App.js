import React, { Component } from 'react';
import Editor from './components/Editor';
import Locknote from './components/Locknote';
import Toolbar from './components/Toolbar';
import Dragging from './components/Functions';
import uuid from 'uuid/v4';

import './components/App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			note: [
				{
					id: uuid(),
					title: 'Default note',
					body: '',
					date: this.setNewDate(),
					haspictures: false,
					canedit: true
				}
			],
			selected: 0
		};
		//------------- Bindings
		this.handleChange = this.handleChange.bind(this);
		this.handleSelected = this.handleSelected.bind(this);
		this.handleAddNote = this.handleAddNote.bind(this);
		this.handleDeleteNote = this.handleDeleteNote.bind(this);
		this.setNewDate = this.setNewDate.bind(this);
		this.handleLockClicked = this.handleLockClicked.bind(this);
		this.handleTextFormat = this.handleTextFormat.bind(this);
	}
	componentDidMount() {
		Dragging();
	}

	setNewDate() {
		let d = new Date();
		let year = d.getFullYear();
		let month = d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
		let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
		let fullDate = `${year}-${month}-${day}`;
		return fullDate;
	}

	//-------------- Handlers

	handleLockClicked() {
		const copyOfNotes = this.state.note;
		copyOfNotes[this.state.selected].canedit = !copyOfNotes[this.state.selected]
			.canedit;
		this.setState({ notes: copyOfNotes });
	}
	handleChange(event, index, title) {
		const copyOfNotes = this.state.note;
		copyOfNotes[index].title = title;
		copyOfNotes[index].body = event;
		this.setState({ note: copyOfNotes });
	}
	handleSelected(e) {
		this.setState({
			selected: e
		});
	}
	handleAddNote() {
		const newNote = {
			id: uuid(),
			title: 'New note',
			body: '',
			date: this.setNewDate(),
			haspictures: false,
			canedit: true
		};
		this.setState({ note: [...this.state.note, newNote] });
	}

	handleDeleteNote() {
		let copyOfNotes = this.state.note;
		if (this.state.note.length > 1) {
			copyOfNotes.splice(this.state.selected, 1);
			this.setState({
				note: copyOfNotes,
				selected: this.state.selected > 0 ? this.state.selected - 1 : 0
			});
		}
	}

	handleTextFormat() {
		console.log('text format');
		document.execCommand('cut');
	}
	render() {
		return (
			<div className="App" id="container">
				<Locknote
					editorlock={this.handleLockClicked}
					caneditnote={this.state.note[this.state.selected].canedit}
				/>

				<Toolbar
					addnote={this.handleAddNote}
					deletenote={this.handleDeleteNote}
					textformat={this.handleTextFormat}
				/>

				<div id="left-panel">
					<ul>
						{this.state.selected < 0
							? ''
							: this.state.note.map(note => {
									return (
										<li
											key={note.id}
											onClick={() => {
												this.setState({
													selected: this.state.note.indexOf(note)
												});
											}}
											className={
												this.state.note[this.state.selected].id === note.id
													? 'selected'
													: ''
											}>
											<h2>{note.title}</h2>
											<p>{note.date}</p>
										</li>
									);
							  })}
					</ul>
				</div>

				<Editor
					default={this.state.note}
					handlechange={this.handleChange}
					handleselected={this.handleSelected}
					selected={this.state.selected}
					data={this.state.note}
					caneditnote={this.state.note[this.state.selected].canedit}
				/>
			</div>
		);
	}
}

export default App;
