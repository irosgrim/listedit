import React, { Component } from 'react';

class Notes extends Component {
	constructor(props) {
		super(props);
		this.searchResults = this.searchResults.bind(this);
		this.notes = this.notes.bind(this);
	}
	notes() {
		return (
			<ul>
				{this.props.selected < 0
					? ''
					: this.props.notes.map(note => {
							return (
								<li
									key={note.id}
									onClick={this.props.handleclick.bind(this, note)}
									className={
										this.props.notes[this.props.selected].id === note.id
											? 'selected'
											: ''
									}>
									<h2
										onDoubleClick={e => {
											e.target.setAttribute('contenteditable', true);
										}}
										onKeyPress={e => {
											if (e.key === 'Enter') {
												e.target.setAttribute('contenteditable', false);
												this.props.handlerenamenote(e.target.innerText);
											}
										}}>
										{note.title}
									</h2>
									<p>{note.date}</p>
								</li>
							);
					  })}
			</ul>
		);
	}
	searchResults() {
		return (
			<div>
				<p>Found: {this.props.searchresults.length} matches</p>
				<ul>
					{this.props.searchresults.map(found => {
						return (
							<li
								key={found.id}
								onClick={this.props.handleclick.bind(this, found)}
								className={
									this.props.notes[this.props.selected].id === found.id
										? 'selected'
										: ''
								}>
								<h2
									onDoubleClick={e => {
										e.target.setAttribute('contenteditable', true);
									}}
									onKeyPress={e => {
										if (e.key === 'Enter') {
											e.target.setAttribute('contenteditable', false);
											this.props.handlerenamenote(e.target.innerText);
										}
									}}
									className="found">
									{found.title}
								</h2>
								<p>{found.date}</p>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
	render() {
		return (
			<div id="left-panel">
				{this.props.searchresults.length > 0
					? this.searchResults()
					: this.notes()}
			</div>
		);
	}
}
export default Notes;
