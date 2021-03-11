import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
	renderInput = ({ input, type, label, meta }) => {
		let Error = null;
		if (meta.touched) {
			Error = meta.error;
		}
		const className = `field ${meta.touched && Error ? "error" : ""}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} type={type} autoComplete="off" />
				<p style={{ color: "#9f3a38" }}>{Error}</p>
			</div>
		);
	};

	onSubmitForm = (formValues) => {
		this.props.onSubmitForm(formValues);
	};

	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmitForm)}
				className="ui form error"
			>
				<Field
					name="title"
					component={this.renderInput}
					type="text"
					label="Title"
				/>
				<Field
					name="description"
					component={this.renderInput}
					type="text"
					label="Description"
				/>

				<button type="submit" className="ui button primary">
					Submit
				</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	const error = {};
	if (!formValues.title || formValues.title.length < 3) {
		error.title = "The title field has to be at least 3 character";
	}
	if (!formValues.description || formValues.description.length < 10) {
		error.description = "The description field has to be at least 10 character";
	}
	return error;
};

export default reduxForm({ form: "stream_Form", validate })(StreamCreate);
