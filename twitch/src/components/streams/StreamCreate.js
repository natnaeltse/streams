import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
	onSubmitForm = (formValues) => {
		this.props.createStream(formValues);
	};

	render() {
		return (
			<div className="ui segments">
				<div className="ui segment secondary">
					<h3>Create a stream</h3>
				</div>
				<div className="ui segments">
					<div className="ui segment">
						<StreamForm onSubmitForm={this.onSubmitForm} />
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);
