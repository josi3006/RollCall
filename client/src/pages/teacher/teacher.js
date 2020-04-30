import React, { useEffect, useState } from "react";

import fire from "../../firebase";

import Navbar from "../../components/navbar/navbar";
import "./teacher.css";

function Teachers() {
	// const [students, setStudents] = useState({});
	// const [teachers, setTeacher] = useState({});
	// const [loading, setLoading] = useState(true);

	// const teacherID = localStorage.getItem("UR_APP_teacher_id");

	// const fetchTeachers = () => {
	// 	fire
	// 		.database()
	// 		.ref(`/teachers/${teacherID}/students/`)
	// 		.once("value")
	// 		.then((snapshot) => {
	// 			if (!snapshot.val()) {
	// 				console.log("Zach Sadovszky");
	// 			}
	// 			setStudents(snapshot.val());
	// 			setLoading(false);
	// 		});
	// };

	return (
		<>
			<Navbar />
			<div className='container'>
				<ul className='collection with-header'>
					<li className='collection-header'>
						<h4>Teachers</h4>
					</li>
					<li className='collection-item'>
						<div>
							Alvin
							<a href='#!' className='secondary-content'>
								<i className='material-icons'>send</i>
							</a>
						</div>
					</li>
					<li className='collection-item'>
						<div>
							Alvin
							<a href='#!' className='secondary-content'>
								<i className='material-icons'>send</i>
							</a>
						</div>
					</li>
					<li className='collection-item'>
						<div>
							Alvin
							<a href='#!' className='secondary-content'>
								<i className='material-icons'>send</i>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Teachers;
