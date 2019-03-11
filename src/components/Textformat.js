import React from 'react';

function Textformat(props) {
	return (
		<div
			className="text-format"
			style={props.visible ? { display: 'block' } : { display: 'none' }}>
			<ul>
				<li>
					<i className="fas fa-bold text-format_icon" />
				</li>
				<li>
					<i className="fas fa-italic text-format_icon" />
				</li>
				<li>
					<i className="fas fa-underline text-format_icon" />
				</li>
				<li>
					<i className="fas fa-strikethrough text-format_icon" />
				</li>
			</ul>
		</div>
	);
}
export default Textformat;
