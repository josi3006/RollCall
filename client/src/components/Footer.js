// import React from "react";
import React, { useEffect, useState } from "react";

import { auth } from "../services/firebase";
import Modal from "./modal";


import "./footer.css";

function Footer() {

	const [modalOpen, setModalOpen] = useState(false);


	return (
		<>

			{modalOpen && (
				<Modal closeModal={() => setModalOpen(false)}>
					<h5>Confirm Logout:</h5><hr /><br />

					<div className='modalbutton' onClick={() => auth().signOut()}>Yes, log out.</div>
					<div className='modalbutton'  onClick={() => setModalOpen(false)}>Cancel</div>

				</Modal>
			)}



			<footer className='transparent'>

				<div className="row">
					<div ClassName="col s12">

						<div className='footercontainer'>
							<div
								className='center addbutton'
								onClick={() => setModalOpen(true)}>

								Logout
							</div>
						</div>
						<div className='copyright'>
							<small>&copy; Sadovszky &amp; Sims 2020</small>
						</div>
					</div>
				</div>

			</footer>


		</>
	);
}

export default Footer;
