import React from "react";
import "./navbar.css";

function Navbar() {
	const handleContact = () => {
		const baseURL = window.location.origin;
		window.location.replace(`${baseURL}/contact`);
	};
	const handleChat = () => {
		const baseURL = window.location.origin;
		window.location.replace(`${baseURL}/chat`);
	};
	const handleTeachers = () => {
		const baseURL = window.location.origin;
		window.location.replace(`${baseURL}/teachers`);
	};
	const handleDashboard = () => {
		const baseURL = window.location.origin;
		window.location.replace(`${baseURL}/dashboard`);
	};
	return (
		<>
			<nav className='nav transparent z-depth-0'>
				<div class='row'>
					<div className='col s12'></div>
					<img
						style={{ width: 550 }}
						src='/rollcalllogohorizontal-min.png'
						alt='Roll Call'
						className='navlogo responsive-img'
					/>
				</div>

				<div className='nav transparent z-depth-0'>
					<ul id='nav-mobile' className='center  '>
						<div className='buttoncontainer'>
							<li>
								<a
									className='transparent z-depth-0 waves-effect waves-light btn'
									onClick={handleChat}>
									Chat{" "}
									<i className='material-icons icon-creamyyy right'>message</i>
								</a>
								<a
									className='transparent z-depth-0 waves-effect waves-light btn'
									onClick={handleContact}>
									Contact Parents{" "}
									<i class='material-icons icon-creamyyy right'>
										move_to_inbox
									</i>
								</a>
								<a
									className='transparent z-depth-0 waves-effect waves-light btn'
									onClick={handleTeachers}>
									Teachers{" "}
									<i className='material-icons icon-creamyyy right'>
										perm_contact_calendar
									</i>
								</a>
								<a
									className='transparent z-depth-0 waves-effect waves-light btn'
									onClick={handleDashboard}>
									Dashboard{" "}
									<i className='material-icons icon-creamyyy right'>home</i>
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
