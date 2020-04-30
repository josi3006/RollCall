import React, { useState, useEffect } from "react";
import Modal from "./modal";
import { auth } from "../service/firebase";
import { db } from "../services/firebase";

import "./studentList.css";
// import "materialize-css/dist/css/materialize.min.css";

const StudentList = ({ students, refreshStudentList }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [activeStudentId, setActiveStudentId] = useState(null);
	const [activeStudentName, setActiveStudentName] = useState(null);
	const [selectedTeacherId, setSelectedTeacherId] = useState(null);
	const [teachers, setTeachers] = useState({});

	useEffect(() => {
		// fire
    // 	.database()
    db
			.ref(`/teachers/`)
			.once("value")
			.then((snapshot) => {
				console.log("teachers", snapshot.val());
				setTeachers(snapshot.val());
			});
	}, []);

	const setActiveStudent = (student) => {
		setActiveStudentName(student.name);
		setActiveStudentId(student.id);
		setModalOpen(true);
	};

	const assignToTeacher = () => {
		const currentAssignedTeacherId = auth().currentUser;
		const updates = {};

		// 1.  Remove the selected student from the current teacher..
		updates[
			`/teachers/${currentAssignedTeacherId}/students/${activeStudentId}`
		] = null;

		// 2. Assign that student to the selected teacher

		const studentToTransfer = {
			id: activeStudentId,
			name: activeStudentName,
		};

		updates[
			`/teachers/${selectedTeacherId}/students/${activeStudentId}`
		] = studentToTransfer;

		// 3. Save and refresh....
		// fire
    // 	.database()
    db
			.ref()
			.update(updates)
			.then(() => {
				setModalOpen(false);
				refreshStudentList();
			});
	};

	return (
		<div>


			<h1 className='classHeader'>Students</h1>
			{Object.keys(students).map((key) => {
				const student = students[key];

				return (
					<div key={student.id}>
						<div className='collection-item transparent z-depth-0'>
							<div className='studentname'>
								{student.name}
								<div
									onClick={() => setActiveStudent(student)}
									className='secondary-content modal-trigger'>
									<i className='material-icons icon-creamyyy'>more</i>
								</div>
							</div>
						</div>
					</div>
				);
			})}
			{modalOpen && (
				<Modal closeModal={() => setModalOpen(false)}>
					<h4>{activeStudentName}</h4>
					
					<h6>Assign to Teacher</h6>

					<div className='select-box'>
						{Object.keys(teachers).map((teacher) => (
							<div
								onClick={() => setSelectedTeacherId(teacher)}
								className={`teacher-option ${
									teacher === selectedTeacherId ? "active" : null
								}`}>
								{teachers[teacher].name}
							</div>
						))}

						
					</div>
					<button className="waves-effect waves-light btn" onClick={assignToTeacher}>Assign to Teacher</button>
				</Modal>
			)}


		</div>
	);
};

export default StudentList;
