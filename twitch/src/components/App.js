import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamUpdate from "./streams/StreamUpdate";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";

function App() {
	return (
		<div className="ui container">
			<Router history={history}>
				<Header />
				<Switch>
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route path="/streams/edit/:id" exact component={StreamUpdate} />
					<Route path="/streams/delete/:id" exact component={StreamDelete} />
					<Route path="/streams/:id" exact component={StreamShow} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
