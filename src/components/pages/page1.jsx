import React from 'react'
import { Link } from 'react-router-dom'


const Page1 = (props) => {
  let item = props.item
  return (
    <div className='col-lg-3 bg-dark'>
      <Link to={"/moveisinfo/" + item.imdbID}>
        <img
          className="movies p-4 w-100 d-flex "
          src={item.Poster}
          alt=""
        />
      </Link>
    </div>
  )
}

export default Page1