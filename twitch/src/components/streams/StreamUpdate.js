import React from "react";
import StreamForm from "./StreamForm";
import { connect } from "react-redux";
import { editStream, getStream } from "../../actions";

class StreamUpdate extends React.Component {
	componentDidMount() {
		this.props.getStream(this.props.match.params.id);
	}

	onSubmitForm = (newFormValues) => {
		this.props.editStream(this.props.match.params.id, newFormValues);
	};
	render() {
		if (!this.props.stream) {
			return null;
		}

		const { title, description } = this.props.stream;
		return (
			<div>
				<h3>Editing a Stream</h3>
				<StreamForm
					onSubmitForm={this.onSubmitForm}
					// "initialValues" is a special props name for displaying initial values
					initialValues={{ title, description }}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	const { id } = ownProps.match.params;
	return { stream: state.streams[id] };
};
export default connect(mapStateToProps, { editStream, getStream })(
	StreamUpdate
);
