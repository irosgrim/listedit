import React, { Component } from 'react';

class Notes extends Component {
	render() {
		return (
			<div id="left-panel">
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
			</div>
		);
	}
}
export default Notes;
