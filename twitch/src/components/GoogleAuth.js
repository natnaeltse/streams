import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

export class GoogleAuth extends Component {
	componentDidMount() {
		const clientID =
			"412820603459-eebs0goc0jt7qb5b7lfhgeojpff86dq5.apps.googleusercontent.com";
		window.gapi.load("auth2", () => {
			window.gapi.auth2
				.init({
					client_id: clientID,
					scope: "email",
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			const userId = this.auth.currentUser.get().getId();
			const userEmail = this.auth.currentUser
				.get()
				.getBasicProfile()
				.getEmail();
			this.props.signIn(isSignedIn, userId, userEmail);
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	loginRender = () => {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<div className="right menu">
					<div className="item">
						<span>
							Signed in as{" "}
							<strong>
								{this.auth.currentUser.get().getBasicProfile().getName()}
							</strong>
						</span>
					</div>
					<button onClick={this.onSignOutClick} className="ui red button">
						Sign Out
					</button>
				</div>
			);
		} else {
			return (
				<div className="right menu">
					<button className="ui red google button">
						<i className="icon google"></i>Register with Gmail
					</button>
					<button onClick={this.onSignInClick} className="ui red google button">
						<i className="icon google"></i>Sign In with Google
					</button>
				</div>
			);
		}
	};

	render() {
		return this.loginRender();
	}
}

const mapStateToProps = (state) => {
	return {
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
