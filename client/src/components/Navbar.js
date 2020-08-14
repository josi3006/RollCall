import React, { useEffect, useState } from "react";
import { auth } from "../services/firebase";
import Modal from "./modal";

import "./navbar.css";
import { Link } from "react-router-dom";
import M from "materialize-css";





function Navbar() {



	M.AutoInit();

	const [modalOpen, setModalOpen] = useState(false);


	return (
		<>

			{modalOpen && (
				<Modal closeModal={() => setModalOpen(false)}>
					<h5>Are you sure?</h5><hr /><br />

					<div className='modalbutton' onClick={() => auth().signOut()}>Log out</div>
					<div className='modalbutton' onClick={() => setModalOpen(false)}>Cancel</div>

				</Modal>
			)}


			<nav className='nav transparent z-depth-1'>

				<div className='nav-wrapper'>




					<a href="#!" className="brand-logo left">
						<img
							src='/rollcalllogosquare-min.png'
							alt='Roll Call'
							className='navlogo responsive-img'
						/>
					</a>











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
							onClick={() => setModalOpen(true)}>
							Logout{" "}
							<i class='material-icons icon-creamyyy right'>
								follow_the_signs
									</i>
						</Link></li>



					</ul>



				</div>

			</nav>


			<ul className="sidenav sidenav-close" id="slide-out-menu">

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
					onClick={() => setModalOpen(true)}>
					Logout{" "}
					<i class='material-icons icon-creamyyy left'>
						follow_the_signs
									</i>
				</Link></li>

				<li><Link
					className='left transparent z-depth-0 waves-effect waves-light btn teal-text text-darken-4'
					to='#'>
					Cancel
					<i class='material-icons icon-creamyyy left'>close</i>

				</Link>
				</li>


			</ul>

		</>
	);
}

export default Navbar;
