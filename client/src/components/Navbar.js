// import React from "react";
import React, { useState, useEffect } from "react";

import "./navbar.css";
import { Link } from "react-router-dom";
import M from "materialize-css";

// THIS IS NEW
import Modal from "./modal";




function Navbar() {

	const [modalOpen, setModalOpen] = useState(false);


	M.AutoInit();

	return (
		<>



			{/* THIS IS NEW */}

			
			
			{modalOpen && (
				<Modal closeModal={() => setModalOpen(false)}>
					<h4>New Modal!</h4>
					<hr />

				</Modal>
			)}

			{/* END OF NEW */}



			<div className='row'>
				<nav className='nav transparent z-depth-1'>

					<div className='nav-wrapper'>


						<div className='col s1'>


							<a href="#!" className="brand-logo left">
								<img
									src='/rollcalllogosquare-min.png'
									alt='Roll Call'
									className='navlogo responsive-img'
								/>

							</a>


						</div>

						<div className='col s1 left navbutton' onClick={() => setModalOpen(true)}>Add Student</div>			


						<div className='col s10'>


							<a href="#" data-target="slide-out-menu" className="sidenav-trigger right"><i className="material-icons icon-creamyyy">menu</i></a>

							<ul className="right hide-on-med-and-down">
								<li><Link
									className='transparent z-depth-0 waves-effect waves-light btn'
									to='/dashboard'>
									Dashboard{" "}
									<i class='material-icons icon-creamyyy right'>home</i>
								</Link></li>

								<li><Link
									className='transparent z-depth-0 waves-effect waves-light btn'
									to='/chat'>
									Chat
									<i className='material-icons icon-creamyyy right'>
										question_answer
									</i>
								</Link></li>


								<li><Link
									className='transparent z-depth-0 waves-effect waves-light btn'
									to='/contact'>
									Contact Parents{" "}
									<i class='material-icons icon-creamyyy right'>
										move_to_inbox
									</i>
								</Link></li>









							</ul>

						</div>

					</div>

				</nav>

			</div>

			<ul className="sidenav" id="slide-out-menu">

				<li><Link
					className='left transparent z-depth-0 waves-effect waves-light teal-text text-darken-4 btn'
					to='/dashboard'>
					Dashboard{" "}
					<i class='material-icons icon-creamyyy  left'>home</i>
				</Link></li>

				<li><Link
					className='left transparent z-depth-0 waves-effect waves-light btn teal-text text-darken-4'
					to='/chat'>
					Chat
					<i className='material-icons icon-creamyyy left'>
						question_answer</i>
				</Link></li>


				<li><Link
					className='left transparent z-depth-0 waves-effect waves-light btn teal-text text-darken-4'
					to='/contact'>
					Contact Parents{" "}
					<i class='material-icons icon-creamyyy left'>
						move_to_inbox
									</i>
				</Link></li>


				<li><Link
					className='left transparent z-depth-0 waves-effect waves-light btn teal-text text-darken-4'
					to='/checkin'>
					Student Check-In{" "}
					<i class='material-icons icon-creamyyy left'>
						move_to_inbox
									</i>
				</Link></li>



			</ul>

		</>
	);
}

export default Navbar;
