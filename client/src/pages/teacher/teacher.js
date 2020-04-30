import React, { useEffect, useState } from "react";

import fire from "../../firebase";

import Navbar from "../../components/navbar/navbar";

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

	return <Navbar />;
}

export default Teachers;
