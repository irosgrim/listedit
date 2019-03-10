import React, { Component } from 'react';

class Locknote extends Component {
	render() {
		return (
			<div className="lock-btn" id="lock-btn" onClick={this.props.editorlock}>
				<i
					className={
						this.props.caneditnote ? 'fas fa-unlock' : 'fas fa-lock locked'
					}
				/>
			</div>
		);
	}
}
export default Locknote;
