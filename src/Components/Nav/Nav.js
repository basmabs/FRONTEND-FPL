
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  const token = localStorage.getItem('token');

  function handleLogout() {
    axios.post('http://localhost:5000/logout').then(response => {
      localStorage.removeItem('token')
      window.location.reload()
      console.log(response.data.message);
    });
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            {token ? (<>
              <li className="nav-item">
                <Link className="nav-link" to="/addSondage">add Sondage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listSondage">list sondage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SondageResult">Result Sondages</Link>
              </li>
              <button className='btn btn-success' id="add" onClick={handleLogout}>Logout</button>
            </>) : null}
          </ul>
        </div>
      </div>
    </nav >
  )
};
export default Nav