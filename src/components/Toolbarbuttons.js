import React from 'react';

function insertUnorderedList() {
	document.execCommand('insertUnorderedList');
}

function Toolbarbuttons(props) {
	const active = () => {
		return props.textformatactive === true
			? { backgroundColor: '#5ea5a8' }
			: null;
	};
	return (
		<div className="menu-controls">
			<ul>
				<li className="btn" onClick={props.deletenote} title="delete note">
					<i className="fas fa-trash-alt" />
				</li>
				<li
					className="btn"
					onClick={props.addnote}
					alt="add new note"
					title="add new note">
					<i className="fas fa-edit" />
				</li>
				<li
					className="btn"
					onClick={props.textformat}
					style={active()}
					title="format text">
					<i className="fas fa-font" />
				</li>
				<li className="btn" title="add images">
					<i className="fas fa-images" />
				</li>
				<li
					className="btn"
					onMouseDown={() => {
						insertUnorderedList();
					}}
					title="insert list">
					<i className="fas fa-list-ul" />
				</li>
			</ul>
		</div>
	);
}
export default Toolbarbuttons;
