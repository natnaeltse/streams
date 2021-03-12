import React from "react";
import { connect } from "react-redux";
import { getStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends React.Component {
	constructor(props) {
		super(props);

		this.videoRef = React.createRef();
	}
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getStream(id);

		this.buildPlayer();
	}

	componentDidUpdate() {
		this.buildPlayer();
	}

	componentWillUnmount() {
		this.player.destroy();
	}

	buildPlayer() {
		if (this.player || !this.props.stream) {
			return;
		}

		const { id } = this.props.match.params;
		this.player = flv.createPlayer({
			type: "flv",
			url: `http://localhost:8000/live/${id}.flv`,
		});
		this.player.attachMediaElement(this.videoRef.current);
		this.player.load();
	}

	render() {
		const { stream } = this.props;
		if (!stream) {
			return (
				<div className="ui segment" style={{ height: "30vh" }}>
					<div className="ui active dimmer">
						<div className="ui text loader">Loading</div>
					</div>
				</div>
			);
		}
		return (
			<div>
				<video ref={this.videoRef} style={{ width: "100%" }} controls />
				<div>
					<h3>{stream.title}</h3>
					<p>{stream.description}</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { getStream })(StreamShow);
