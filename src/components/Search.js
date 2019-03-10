import React, { Component } from 'react';

class Search extends Component {
	render() {
		return (
			<div className="menu-search">
				<input type="text" className="search-input" />
				<i className="fas fa-search search-btn" />
			</div>
		);
	}
}
export default Search;
