import React from 'react'
import { Link } from 'react-router-dom'
import Page2 from '../../components/pages/page2'
import Carousel from './carousel'



const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark w-100 ">
        <div className="container">
          <Link className="navbar-brand " to={"/"}>MoveisTV</Link>
          {/* <button className="navbar" type="select" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          </button> */}
          
            <div className="navbar-nav ms-auto border border-dark  rounded d-flex ">
            <Page2 />
            </div>
        </div>
      </nav>
      <Carousel/>
    </div>
  )
}

export default Header