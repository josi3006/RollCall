import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
// import { Chat } from "../pages/Chat";

// import { Sidenav } from "materialize-css";

function Navbar() {


	return (
		<>
			<nav className='nav transparent z-depth-0'>
				<div class='row'>
					<div className='col s12'></div>
					<img
						// style={{ width: 550 }}
						src='/rollcalllogohorizontal-min.png'
						alt='Roll Call'
						className='navlogo responsive-img'
					/>
				</div>

				<div className='nav transparent z-depth-0'>
					<ul id='nav-mobile' className='center hide-on-med-and-down '>
						<div className='buttoncontainer'>
							<li>
								<a className='transparent z-depth-0 waves-effect waves-light btn'>
									Add a Student{" "}
									<i className='material-icons icon-creamyyy right'>add</i>
								</a>
								<a className='transparent z-depth-0 waves-effect waves-light btn'>
									Move Class{" "}
									<i className='material-icons icon-creamyyy right'>
										contact_mail
									</i>
								</a>


                                <Link className="transparent z-depth-0 waves-effect waves-light btn" to="/chat">Chat<i className='material-icons icon-creamyyy right'>
										question_answer
									</i></Link>

{/* 
								<a className='transparent z-depth-0 waves-effect waves-light btn'>
									Chat{" "}
									<i className='material-icons icon-creamyyy right'>
										question_answer
									</i>
								</a> */}
								<a className='transparent z-depth-0 waves-effect waves-light btn'>
									Contact Parents{" "}
									<i class='material-icons icon-creamyyy right'>
										move_to_inbox
									</i>
								</a>
								<a className='transparent z-depth-0 waves-effect waves-light btn'>
									Teachers{" "}
									<i className='material-icons icon-creamyyy right'>
										perm_contact_calendar
									</i>
								</a>
							</li>
						</div>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
