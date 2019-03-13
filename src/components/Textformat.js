import React from 'react';

function bold() {
	document.execCommand('bold', false, null);
}
function italic() {
	document.execCommand('italic', false, null);
}
function underline() {
	document.execCommand('underline', false, null);
}
function strikeThrough() {
	document.execCommand('strikeThrough', false, null);
}
function Textformat(props) {
	return (
		<div
			className="text-format"
			style={props.visible ? { display: 'block' } : { display: 'none' }}>
			<ul>
				<li
					onMouseDown={() => {
						bold();
					}}>
					<i className="fas fa-bold text-format_icon" />
				</li>
				<li
					onMouseDown={() => {
						italic();
					}}>
					<i className="fas fa-italic text-format_icon" />
				</li>
				<li
					onMouseDown={() => {
						underline();
					}}>
					<i className="fas fa-underline text-format_icon" />
				</li>
				<li
					onMouseDown={() => {
						strikeThrough();
					}}>
					<i className="fas fa-strikethrough text-format_icon" />
				</li>
			</ul>
		</div>
	);
}
export default Textformat;
