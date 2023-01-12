import React from 'react'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Page2 = () => {
  const inputRef = useRef();
  const nav = useNavigate();
  return (
    <div>
       <div className="navTop container-fluid ">
    <div className='container-md'>
      <div className="rowInput col-lg-12 col-md-12 col-sm-10 col-xs-6">
            <input className='input bg-dark rounded' onKeyDown={(e) => { if (e.key === "Enter") { nav("/" + inputRef.current.value) } }} ref={inputRef} class="inp-1 form-control appearance-none   mr-sm-2" type="search" placeholder="Search..." aria-label="Search" />
            <button className='button rounded mr-1' onClick={() => { nav("/" + inputRef.current.value) }} class="button my-0 mx-0 my-sm-0" type="submit">Search</button>
      </div>
    </div>


  </div>
    </div>

  )
}


export default Page2