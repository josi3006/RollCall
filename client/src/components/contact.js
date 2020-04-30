import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./contact.css";

function contactComponent() {
	return (
		<>
			<Navbar />
			&nbsp;
			<div className='container'>
				<div class='row'>
					<form class='col s12'>
						<div class='row'>
							<div class='input-field col s6'>
								<input id='first_name' type='text' class='validate' />
								<label for='first_name'>Parents Name</label>
							</div>{" "}
							<div class='row'>
								<div class='input-field col s6'>
									<input id='email' type='email' class='validate' />
									<label for='email'>Student's Name</label>
								</div>
							</div>
						</div>

						<div class='row'>
							<div class='input-field col s6'>
								<input id='email' type='email' class='validate' />
								<label for='email'>About their day</label>
							</div>
							<div class='input-field col s6'>
								<input id='email' type='email' class='validate' />
								<label for='email'>Email</label>
							</div>
							<div classname='center'>
								<div className='center addbutton'>Send</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default contactComponent;
