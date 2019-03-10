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
					/>
					<Search />
				</div>
			</div>
		);
	}
}
export default Toolbar;
