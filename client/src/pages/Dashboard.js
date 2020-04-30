import React, { Component, useEffect, useState } from "react";
import { db } from "../services/firebase";
import Navbar from "../components/Navbar"


import Footer from "../components/Footer";

// import fire from "../../firebase";

// import { auth } from "../../firebase";
// import { db } from "../../firebase";

// import Navbar from "../../components/navbar/navbar";
import StudentList from "../components/studentList";
// import SideNav from "../../components/sidebarnav";
// import { Sidenav } from "materialize-css";
import "./dashboard.css";





const [students, setStudents] = useState({});
const [newStudentName, setNewStudentName] = useState("");
const [loading, setLoading] = useState(true);

const teacherID = localStorage.getItem("UR_APP_teacher_id");

const clearForm = () => {
    setNewStudentName("");
};

const fetchStudents = () => {
    // fire
    // 	.database()
    db
        .ref(`/teachers/${teacherID}/students/`)
        .once("value")
        .then((snapshot) => {
            if (!snapshot.val()) {
                console.log("Zach Sadovszky");
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
    db
        .ref()
        .update(updates)
        .then(() => {
            fetchStudents();
            clearForm();
        });
};

useEffect(() => {
    fetchStudents();
}, []);

export default class Dashboard extends Component {

    render() {

        return (
            <>
                <Navbar />

                <div className='container'>
                    <div className='row'>
                        <div className='center col s3'>
                            <div>
                                <p className='newStudentHeader'>Student Check-In:</p>
                            </div>
                        </div>
                        <div className="col s6">
                            <input
                                onChange={(event) =>
                                    setNewStudentName(event.currentTarget.value)
                                }
                                value={newStudentName}
                                id='newStudentInput'
                            />
                        </div>
                        <div className="col s3">
                            <div
                                className='center transparent z-depth-0 addStudent col s5'
                                onClick={() => addStudent(newStudentName)}>
                                <div className='addbutton'>
                                    <i class='material-icons icon-creamyyy'>add</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


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
                    </div>
                </div>

                <Footer />
            </>
        );
    };
};




// export default Dashboard;
