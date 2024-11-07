import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="head">
      {/* Navbar Component */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

     
      <div className="container mt-5">
        <h1 className='text-center'>Chatbot</h1>
      </div>
    </div>
  );
}

export default Home;
