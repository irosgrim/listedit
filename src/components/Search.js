import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.state = { cancelicon: false };
	}
	handleSearch(e) {
		e.target.value
			? this.setState({ cancelicon: true })
			: this.setState({ cancelicon: false });
		return this.props.handlesearch(e);
	}
	handleClear(e) {
		const searchInput = document.getElementById('search_input');
		searchInput.value = '';
		this.setState({ cancelicon: false });
		return this.props.handleclear(e);
	}
	render() {
		return (
			<div className="menu-search">
				<form>
					<input
						id="search_input"
						type="text"
						className="search-input"
						onChange={this.handleSearch}
					/>
					<i
						className={
							this.state.cancelicon
								? 'far fa-times-circle search-btn'
								: 'fas fa-search search-btn'
						}
						onClick={this.handleClear}
					/>
				</form>
			</div>
		);
	}
}
export default Search;
