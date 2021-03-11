import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

export class Header extends Component {
	render() {
		return (
			<div className="ui segment">
				<div className="ui secondary pointing menu">
					<Link to="/" className="item">
						Stream List
					</Link>
					<GoogleAuth />
				</div>
			</div>
		);
	}
}

export default Header;
