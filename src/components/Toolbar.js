import React, { Component } from 'react';
import Logo from './Logo';
import Toolbarbuttons from './Toolbarbuttons';
import Search from './Search';

class Toolbar extends Component {
	render() {
		return (
			<div className="toolbar">
				<Logo />
				<div className="toolbar-menu">
					<Toolbarbuttons
						addnote={this.props.addnote}
						deletenote={this.props.deletenote}
						textformat={this.props.textformat}
						textformatactive={this.props.textformatactive}
					/>
					<Search
						handlesearch={this.props.handlesearch}
						handleclear={this.props.handleclear}
					/>
				</div>
			</div>
		);
	}
}
export default Toolbar;
