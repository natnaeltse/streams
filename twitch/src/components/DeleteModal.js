import React from "react";
import ReactDOM from "react-dom";

const DeleteModal = (props) => {
	if (!props.id) {
		return null;
	}
	return ReactDOM.createPortal(
		<div
			onClick={props.onDismiss}
			className="ui dimmer modals visible active"
			style={{ opacity: "0.9" }}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="ui modal standard visible active"
			>
				<div className="header" style={{ position: "relative" }}>
					{props.header}
					<i
						onClick={props.onDismiss}
						className="close icon"
						style={{ position: "absolute", right: "10px" }}
					></i>
				</div>
				<div className="content">
					{props.content}
					<div>Titled: {props.title}</div>
				</div>
				<div className="actions">{props.actions}</div>
			</div>
		</div>,
		document.querySelector("#modals")
	);
};

export default DeleteModal;
