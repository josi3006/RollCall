import React from 'react';
import { auth } from '../services/firebase';


function Footer() {
  return (
    <footer>
      <div className="footer-copyright">
        <p><small>&copy; Sadovszky &amp; Sims 2020</small></p>
      </div>
      <button className="btn btn-primary mr-3" onClick={() => auth().signOut()}>Logout</button>
    </footer>
  )
}

export default Footer;