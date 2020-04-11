import React, { Component } from "react";
import Logo from "./components/logo/logo";
// import Navbar from "./components/navbar/navbar";
import ClassList from "./components/class/class";
import StudentProfile from "./components/studentprofile/studentProfile";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

class App extends Component {
	render() {
		return (
			<>
				{" "}
				{/* <div>{<Navbar />}</div> */}
				<div>{<Logo />}</div>
				<div>{<ClassList />}</div>
				<div>{<StudentProfile />}</div>{" "}
			</>
		);
	}
}

export default App;
