import React from 'react';

function Toolbarbuttons(props) {
	const active = () => {
		return props.textformatactive === true
			? { backgroundColor: '#5ea5a8' }
			: null;
	};
	return (
		<div className="menu-controls">
			<ul>
				<li className="btn" onClick={props.deletenote}>
					<i className="fas fa-trash-alt" />
				</li>
				<li className="btn" onClick={props.addnote}>
					<i className="fas fa-edit" />
				</li>
				<li className="btn" onClick={props.textformat} style={active()}>
					<i className="fas fa-font" />
				</li>
				<li className="btn">
					<i className="fas fa-images" />
				</li>
				<li className="btn">
					<i className="fas fa-list-ul" />
				</li>
			</ul>
		</div>
	);
}
export default Toolbarbuttons;
