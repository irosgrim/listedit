function Dragging() {
	let isResizing = false;
	let lastDownX = 0;
	let editor_enabled = true;

	const container = document.getElementById('container');
	const left = document.getElementById('left-panel');
	const right = document.getElementById('right-panel');
	const panel_resizer = document.getElementById('drag');

	panel_resizer.onmousedown = e => {
		isResizing = true;
		lastDownX = e.clientX;
	};

	document.onmousemove = e => {
		if (!isResizing) {
			return;
		}

		let offsetRight =
			container.clientWidth - (e.clientX - container.offsetLeft);
		left.style.right = offsetRight + 'px';
		right.style.width = offsetRight + 'px';
	};

	document.onmouseup = e => {
		isResizing = false;
	};
}
export default Dragging;
