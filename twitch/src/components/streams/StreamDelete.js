import React from "react";
import { connect } from "react-redux";
import { getStream, deleteStream } from "../../actions";
import history from "../../history";
import { Link } from "react-router-dom";
import DeleteModal from "../DeleteModal";

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.getStream(this.props.match.params.id);
	}

	btnActions = () => {
		const { id } = this.props.match.params;
		return (
			<React.Fragment>
				<Link to="/" className="ui button">
					Cancel
				</Link>
				<button
					className="ui button negative"
					onClick={() => {
						this.props.deleteStream(id);
					}}
				>
					Delete
				</button>
			</React.Fragment>
		);
	};

	render() {
		if (!this.props.stream) {
			return null;
		}
		return (
			<DeleteModal
				header="Delete Stream"
				content="Are you sure you want to delete this stream?"
				title={this.props.stream.title}
				id={this.props.stream.id}
				onDismiss={() => history.push("/")}
				//Passing a fragment as a prop
				actions={this.btnActions()}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, deleteStream })(
	StreamDelete
);
