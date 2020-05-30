import React from "react";
import { auth } from "../services/firebase";

import "./footer.css";

function Footer() {
	return (
		<>
			<footer class='transparent z-depth-1 sticky-footer'>
				<div class='row'>
					<div class='col s12'>
						<div className='footercontainer'>
							<div
								className='center addbutton'
								onClick={() => auth().signOut()}>
								Logout
							</div>
						</div>
						<p className='center copyright'>
							<medium>&copy; Sadovszky &amp; Sims 2020</medium>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
