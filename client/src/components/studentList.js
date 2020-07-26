import React, { useState, useEffect } from "react";
import Modal from "./modal";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";

import "./studentList.css";

const StudentList = ({ students, refreshStudentList }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [activeStudentId, setActiveStudentId] = useState(null);
	const [activeStudentName, setActiveStudentName] = useState(null);
	const [selectedTeacherId, setSelectedTeacherId] = useState(null);
	const [teachers, setTeachers] = useState({});
	const [moveclassmodel, setMoveClassModel] = useState(false);

	useEffect(() => {
		db.ref(`/teachers/`)
			.once("value")
			.then((snapshot) => {
				setTeachers(snapshot.val());
			});
	}, []);

	const setActiveStudent = (student) => {
		setActiveStudentName(student.name);
		setActiveStudentId(student.id);
		setModalOpen(true);
	};

	const assignToTeacher = () => {
		const currentAssignedTeacherId = auth().currentUser.uid;
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

		db.ref()
			.update(updates)
			.then(() => {
				setModalOpen(false);
				refreshStudentList();
			});
	};

	const moveClass = () => {
		const updates = {};
		const currentAssignedTeacherId = auth().currentUser.uid;
		// remove active teacher..
		updates[`/teachers/${currentAssignedTeacherId}/students`] = null;
		Object.keys(students).forEach((key) => {
			const studentToTransfer = {
				id: students[key].id,
				name: students[key].name,
			};
			updates[
				`/teachers/${selectedTeacherId}/students/${studentToTransfer.id}`
			] = studentToTransfer;
		});
		db.ref()
			.update(updates)
			.then(() => {
				setMoveClassModel(false);
				refreshStudentList();
			});
	};

	return (
		<div>
			<h3 className='studentheader'>Student List:</h3>
			<div className='center addbutton' onClick={() => setMoveClassModel(true)}>
				Move Class
			</div>
			&nbsp;




			{Object.keys(students).map((key) => {
				const student = students[key];



				return (
					<div key={student.id}>
						<div className='transparent z-depth-0'>
							<div className='studentname'>
								{student.name}

								<div
									onClick={() => setActiveStudent(student)}
									className='secondary-content left'>
									<i className='material-icons icon-creamyyy' alt="Move" title='Remove Student from List'>person_remove</i>
								</div>


							</div>
						</div>
					</div>
				);
			})}
			{modalOpen && (
				<Modal closeModal={() => setModalOpen(false)}>
					<h4>{activeStudentName}</h4>
					<hr />
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
					<button
						className='waves-effect waves-light btn'
						onClick={assignToTeacher}>
						Assign to Teacher
					</button>
				</Modal>
			)}
			{moveclassmodel && (
				<Modal closeModal={() => setMoveClassModel(false)}>
					<h4>Move class</h4>
					<hr />

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
					<button className='waves-effect waves-light btn' onClick={moveClass}>
						Move Class
					</button>
				</Modal>
			)}




		</div>
	);
};

export default StudentList;
