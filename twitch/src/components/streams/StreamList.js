import React from "react";
import { connect } from "react-redux";
import { getStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
	componentDidMount() {
		this.props.getStreams();
	}

	renderButton = (stream) => {
		if (this.props.currentUserID === stream.userId) {
			return (
				<div className="right floated content">
					<Link
						to={`/streams/delete/${stream.id}`}
						className="ui button negative"
					>
						Delete
					</Link>
					<Link to={`/streams/edit/${stream.id}`} className="ui button primary">
						Edit
					</Link>
				</div>
			);
		}
	};
	renderList = () => {
		return this.props.streams.map((stream) => {
			return (
				<div className="item" key={stream.id}>
					{this.renderButton(stream)}
					<i className="large middle aligned icon camera"></i>
					<div className="content">{stream.title}</div>
					<div className="description">{stream.description}</div>
				</div>
			);
		});
	};

	renderCreate = () => {
		if (this.props.isSignedIn) {
			return (
				<Link to="/streams/new" className="ui button primary">
					Create a stream
				</Link>
			);
		}
	};

	render() {
		return (
			<div className="ui segments">
				<div className="ui segment secondary">
					<h3>Stream List</h3>
				</div>
				<div className="ui segment">
					<div className="ui segment">
						<div className="ui celled list">{this.renderList()}</div>
					</div>{" "}
				</div>
				<div className="ui segment">
					<div style={{ textAlign: "right" }}>{this.renderCreate()}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
		currentUserID: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { getStreams })(StreamList);
