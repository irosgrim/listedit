import React, { Component } from 'react';

class Notes extends Component {
	constructor(props) {
		super(props);
		this.loadData = this.loadData.bind(this);
		this.state = {
			values: []
		};
	}
	loadData(id) {
		this.setState({
			values: this.props.values[id]
		});
		this.props.clicked(id);
	}
	render() {
		return (
			<div className="list frame">
				<h2>{this.props.children}</h2>
				<ul>
					{this.props.values.map((note, id) => {
						return (
							<li key={id} onClick={this.loadData.bind(this, note)}>
								<h3>{note.title}</h3>
								<p>{note.note}</p>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
export default Notes;
