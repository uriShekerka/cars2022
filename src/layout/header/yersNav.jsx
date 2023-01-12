import React, { useRef } from 'react';

function NavBar() {
  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-light">
    <div className="container-fluid">
      <a className="navbar  text-light fw-bold fs-3 mb-3" href="#">Top Years</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mt-2" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-5">
          <li className="nav-item text-light">
            <a className="nav-link active text-light fw-light" aria-current="page" href="#">1989</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light fw-light" aria-current="page" href="#">1995</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-light fw-light" aria-current="page" href="#">2000</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fw-light" href="#">2020</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light fw-light" href="#">2021</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}



export default NavBar;
