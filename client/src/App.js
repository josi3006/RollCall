// import React, { Component } from "react";
import React from "react";
import DashboardPage from "../src/pages/dashboard/dashboard";
import LoginPage from "./pages/loginpage/login";
import Chatpage from "./pages/chatpage/chat";
import Contact from "./pages/contact/contact";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "./components/navbar/navbar";

const App = () => {
	return (
		<>
			<Router>
				<div>
					<div className='contentdiv'>
						<Route exact path='/' component={LoginPage} />
						<Route exact path='/dashboard' component={DashboardPage} />
						<Route exact path='/contact' component={Contact} />
					</div>
				</div>
			</Router>
		</>
	);
};

export default App;
