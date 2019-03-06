import React, { Component } from 'react';

class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.selected.id,
			title: this.props.selected.title,
			note: this.props.selected.note
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ note: event.target.value });
		//this.props.handleedit(event.target.value);
		console.log(event.target.value);
	}
	render() {
		return (
			<div className="editor frame">
				<h2>Editor component</h2>
				<p>
					When I click on any of the list items on the left, <br /> i want this
					component to get that item, as props or somehow. I want the textarea
					to get that item as value and i <br /> want to be able to edit it and
					save it.
				</p>
				<p>Parent state.selected note as props: {this.props.selected.note}</p>
				<p>
					this.state.id should be equal to the props: {this.props.selected.id}
				</p>

				<textarea
					name="editor"
					id="editor"
					cols="30"
					rows="10"
					defaultValue={this.props.selected.note}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}
export default Editor;
