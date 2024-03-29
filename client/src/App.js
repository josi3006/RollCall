import React, { Component } from "react";
import {
	Route,
	BrowserRouter as Router,
	Switch,
	Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { auth } from "./services/firebase";
import "./app.css";
import contactComponent from "./components/contact";

function PrivateRoute({ component: Component, authenticated, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) =>
				authenticated === true ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: "/login", state: { from: props.location } }}
					/>
				)
			}
		/>
	);
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) =>
				authenticated === false ? (
					<Component {...props} />
				) : (
					<Redirect to='/dashboard' />
				)
			}
		/>
	);
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			authenticated: false,
			loading: true,
		};
	}

	componentDidMount() {
		auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({
					authenticated: true,
					loading: false,
				});
			} else {
				this.setState({
					authenticated: false,
					loading: false,
				});
			}
		});
	}

	render() {
		return this.state.loading === true ? (
			<div className='spinner-border text-success' role='status'>
				<span className='sr-only'>Loading...</span>
			</div>
		) : (
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<PrivateRoute
						path='/dashboard'
						authenticated={this.state.authenticated}
						component={Dashboard}
					/>
					<PrivateRoute
						path='/chat'
						authenticated={this.state.authenticated}
						component={Chat}
					/>
					<PrivateRoute
						path='/contact'
						authenticated={this.state.authenticated}
						component={contactComponent}
					/>

					<PublicRoute
						path='/signup'
						authenticated={this.state.authenticated}
						component={Signup}
					/>
					<PublicRoute
						path='/login'
						authenticated={this.state.authenticated}
						component={Login}
					/>
				</Switch>
			</Router>
		);
	}
}

export default App;
