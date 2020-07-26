// import React from "react";
import React, { useEffect, useState } from "react";
import { auth } from "../services/firebase";

import Navbar from "../components/Navbar";
import StudentList from "./studentList.js";

import { db } from "../services/firebase";


import "./contact.css";

function Contact() {

	const [students, setStudents] = useState({});
	const [loading, setLoading] = useState(true);

	const teacherID = auth().currentUser.uid;


	const fetchStudents = () => {
		// fire
		// 	.database()
		db.ref(`/teachers/${teacherID}/students/`)
			.once("value")
			.then((snapshot) => {
				if (!snapshot.val()) {
					setStudents({});
					setLoading(false);
					return;
				}
				setStudents(snapshot.val());
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchStudents();
	}, []);

	return (
		<>
			<Navbar />

			<div className='container'>
				<div class='row'>
					<form class='col s12'>
						<div class='row'>
							<div class='input-field col s6'>
								<input id='first_name' type='text' class='validate' />
								<label for='first_name'>Parents Name</label>
							</div>{" "}
							<div class='row'>
								<div class='input-field col s6'>
									<input id='email' type='email' class='validate' />
									<label for='email'>Student's Name</label>
								</div>
							</div>
						</div>

						<div class='row'>
							<div class='input-field col s6'>
								<input id='email' type='email' class='validate' />
								<label for='email'>Message</label>
							</div>
							<div class='input-field col s6'>
								<input id='email' type='email' class='validate' />
								<label for='email'>Email</label>
							</div>
							<div classname='center'>
								<div className='center addbutton'>Send</div>
							</div>
						</div>
					</form>
				</div>
			</div>



			<StudentList
				students={students}
				refreshStudentList={fetchStudents}
			/>







		</>



	);
}




export default Contact;
