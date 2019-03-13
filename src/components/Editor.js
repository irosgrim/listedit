import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

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
					hastitle: false,
					haspictures: false,
					canedit: true
				}
			],
			selected: 0
		};
		this.contentEditable = React.createRef();
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

		if (newState[this.props.selected].hastitle === false) {
			return substr.length < 1 ? 'Empty note' : substr;
		} else {
			return newState[this.props.selected].title;
		}
	};
	handleChange(event) {
		const newState = this.state.note;
		newState[this.props.selected].body = event.target.value;
		this.setState({ note: newState });
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
				{/* <div
					id="editor"
					className="editor"
					name="editor"
					cols="30"
					rows="10"
					value={this.state.note[this.props.selected].body}
					onChange={this.handleChange}
					contentEditable={this.props.caneditnote}
				/> */}

				<ContentEditable
					id="editor"
					className="editor"
					name="editor"
					innerRef={this.contentEditable}
					html={this.state.note[this.props.selected].body}
					disabled={!this.props.caneditnote}
					onChange={this.handleChange}
					tagName="div"
				/>
			</div>
		);
	}
}
export default Editor;
