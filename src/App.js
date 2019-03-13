import React, { Component } from 'react';
import Editor from './components/Editor';
import Notes from './components/Notes';
import Locknote from './components/Locknote';
import Toolbar from './components/Toolbar';
import Textformat from './components/Textformat';
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
					hastitle: false,
					haspictures: false,
					canedit: true
				}
			],
			selected: 0,
			buttonactive: 0,
			textformatvisible: false,
			searchresults: []
		};
		//------------- Bindings
		this.handleChange = this.handleChange.bind(this);
		this.handleNoteClicked = this.handleNoteClicked.bind(this);
		this.handleSelected = this.handleSelected.bind(this);
		this.handleAddNote = this.handleAddNote.bind(this);
		this.handleDeleteNote = this.handleDeleteNote.bind(this);
		this.setNewDate = this.setNewDate.bind(this);
		this.handleLockClicked = this.handleLockClicked.bind(this);
		this.handleTextFormat = this.handleTextFormat.bind(this);
		this.handleRenameNote = this.handleRenameNote.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleClearSearchResults = this.handleClearSearchResults.bind(this);
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
	handleNoteClicked(e) {
		this.setState({
			selected: this.state.note.indexOf(e)
		});
	}

	handleLockClicked() {
		const copyOfNotes = this.state.note;
		copyOfNotes[this.state.selected].canedit = !copyOfNotes[this.state.selected]
			.canedit;
		this.setState({ notes: copyOfNotes });
	}
	handleChange(event, index, title) {
		const regex = /&(nbsp|amp|quot|lt|gt);/gi;
		const copyOfNotes = this.state.note;
		copyOfNotes[index].title = title
			.replace(regex, '')
			.replace(/<ul>/g, '')
			.replace(/<\/ul>/g, '')
			.replace(/<li>/g, '')
			.replace(/<\/li>/g, '')
			.replace(/<br>/g, '')
			.replace(/<\/br>/g, '')
			.replace(/<b>/g, '')
			.replace(/<\/b>/g, '')
			.replace(/<i>/g, '')
			.replace(/<\/i>/g, '')
			.replace(/<u>/g, '')
			.replace(/<\/u>/g, '')
			.replace(/<strike>/g, '')
			.replace(/<\/strike>/g, '')
			.replace(/<p>/g, '')
			.replace(/<\/p>/g, '')
			.replace(/</g, '')
			.replace(/>/g, '')
			.replace(/&nbsp/g, '');
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
			hastitle: false,
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

	handleRenameNote(e) {
		const copyOfNotes = this.state.note;
		copyOfNotes[this.state.selected].title = e;
		copyOfNotes[this.state.selected].hastitle = true;
		this.setState({ note: copyOfNotes });
	}

	active = () => {
		if (this.state.buttonactive === 2) {
			this.setState({ buttonactive: 0 });
			return 0;
		} else {
			this.setState({ buttonactive: 2 });
			return 2;
		}
	};

	handleSearch(e) {
		const found = this.state.note.filter(note => {
			return note.body.includes(e.target.value);
		});

		this.setState({ searchresults: found });
		if (e.target.value === '') {
			this.setState({ searchresults: [] });
		}
	}
	handleClearSearchResults(e) {
		this.setState({ searchresults: [] });
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
					textformat={() => {
						this.setState({
							textformatvisible: !this.state.textformatvisible
						});
						return false;
					}}
					textformatactive={this.state.textformatvisible}
					handlesearch={this.handleSearch}
					handleclear={this.handleClearSearchResults}
					searchresults={this.state.searchresults}
				/>
				<Textformat visible={this.state.textformatvisible} />
				<Notes
					selected={this.state.selected}
					notes={this.state.note}
					handleclick={this.handleNoteClicked}
					handlerenamenote={this.handleRenameNote}
					searchresults={this.state.searchresults}
				/>
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
