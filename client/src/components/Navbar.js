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
					<ul id='nav-mobile' className='center'>
						<div className='buttoncontainer'>
							<li>
								<Link
									className='transparent z-depth-0 waves-effect waves-light btn'
									to='/dashboard'>
									Dashboard{" "}
									<i class='material-icons icon-creamyyy right'>home</i>
								</Link>
								<Link
									className='transparent z-depth-0 waves-effect waves-light btn'
									to='/chat'>
									Chat
									<i className='material-icons icon-creamyyy right'>
										question_answer
									</i>
								</Link>

								<Link
									className='transparent z-depth-0 waves-effect waves-light btn'
									to='/contact'>
									Contact Parents{" "}
									<i class='material-icons icon-creamyyy right'>
										move_to_inbox
									</i>
								</Link>
							</li>
						</div>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
