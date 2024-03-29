import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import Navbar from "../components/Navbar";
import Modal from "../components/modal";


import Footer from "../components/Footer";

// import fire from "../../firebase";

import { auth } from "../services/firebase";
// import { db } from "../../firebase";

// import Navbar from "../../components/navbar/navbar";
import StudentList from "../components/studentList";
// import SideNav from "../../components/sidebarnav";
// import { Sidenav } from "materialize-css";
import "./dashboard.css";

const Dashboard = () => {
	const [students, setStudents] = useState({});
	const [newStudentName, setNewStudentName] = useState("");
	const [loading, setLoading] = useState(true);

	const teacherID = auth().currentUser.uid;

	const [modalOpen, setModalOpen] = useState(false);


	const clearForm = () => {
		setNewStudentName("");
	};

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

	const addStudent = (studentName) => {
		const updates = {};
		const newStudentId = Date.now();
		updates[`teachers/${teacherID}/students/${newStudentId}/id`] = newStudentId;
		updates[
			`teachers/${teacherID}/students/${newStudentId}/name`
		] = studentName;
		// fire
		//   .database()
		db.ref()
			.update(updates)
			.then(() => {
				fetchStudents();
				clearForm();
				setModalOpen(false);
			});
	};

	useEffect(() => {
		fetchStudents();
	}, []);






	return (
		<>
			<Navbar />


			{modalOpen && (
				<Modal closeModal={() => setModalOpen(false)}>
					<h5>Add Student to List</h5>

					<input
						placeholder='Student Name to Add'
						onChange={(event) => setNewStudentName(event.currentTarget.value)}
						value={newStudentName}
						id='newStudentInput'
					/>
					<div
						// className='transparent z-depth-0 addstudent col s5'
						onClick={() => addStudent(newStudentName)}>
						<div className='modalbutton'>
							<i class='material-icons'>add</i>
						</div>
					</div>

				</Modal>
			)}


			<div className='container'>
				<div className='row'>
					<div className='col s12 studentList '>
						{loading ? (
							<div>Loading...</div>
						) : (
						
								<StudentList
									students={students}
									refreshStudentList={fetchStudents}
								/>
							)}
					</div>


					<div
						className='transparent z-depth-0 addstudent col s5'
						onClick={() => setModalOpen(true)}>&nbsp;

						<div className='addbutton'>
							<i class='material-icons icon-creamyyy'>add</i>add one
							</div>

					</div>





				</div>
			</div>
			<Footer />
		</>
	);
};

export default Dashboard;
