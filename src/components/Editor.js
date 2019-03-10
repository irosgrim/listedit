import React, { Component } from 'react';

class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			note: [
				{
					id: 0,
					title: '',
					body: '',
					date: '',
					haspictures: false,
					canedit: true
				}
			],
			selected: 0,
			caneditnote: true
		};

		this.handleChange = this.handleChange.bind(this);
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.data !== this.props.data) {
			this.setState({
				note: this.props.data
			});
		}
	}
	componentDidMount() {
		this.setState({ note: this.props.default });
	}

	newTitle = event => {
		const newState = this.state.note;
		newState[this.props.selected].body = event.target.value;

		const substr =
			newState[this.props.selected].body.length < 25 &&
			newState[this.props.selected] !== -1
				? newState[this.props.selected].body
				: newState[this.props.selected].body.substring(0, 22);
		return substr;
	};
	handleChange(event) {
		const newState = this.state.note;
		newState[this.props.selected].body = event.target.value;
		this.setState({ note: newState });

		console.log(this.newTitle(event));
		this.props.handlechange(
			event.target.value,
			this.props.selected,
			this.newTitle(event)
		);
	}

	render() {
		return (
			<div id="right-panel">
				<div id="drag" />
				<h3 className="title">{this.state.note[this.props.selected].title}</h3>
				<textarea
					id="editor"
					className="editor"
					name="editor"
					cols="30"
					rows="10"
					value={this.state.note[this.props.selected].body}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}
export default Editor;
