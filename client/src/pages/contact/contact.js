import React from "react";
import "./contact.css";
import Navbar from "../../components/navbar/navbar";

function Contact() {
	return (
		<>
			<Navbar />
			&nbsp; &nbsp; &nbsp; &nbsp;
			<div className='container'>
				<div className='row'>
					<form className='col s12'>
						<div className='row'>
							<div className='input-field col s12'>
								<input id='student_name' type='text' className='validate' />
								<label for='first_name'>Student Name</label>
							</div>
						</div>
						<div className='row'>
							<div className='input-field col s12'>
								<input id='input' type='text' className='input' />
								<label for='input'> About Student's Day</label>
							</div>
						</div>
						<div className='row'>
							<div className='input-field col s12'>
								<input id='email' type='email' className='validate' />
								<label for='email'> Parent Email</label>
							</div>
							<button
								href='mailto: parentemail@rollcall.com'
								class='btn waves-effect waves-light'>
								Send
								<i class='material-icons right'>mail</i>
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Contact;
