import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from '../components/main';
import MoveisInfo from '../components/pages/MoviesInfo';

import Layout from '../layout/layout';
const AppRouters = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route index element={<Main/>}/>
          <Route path='/:search'  element={<Main/>}/>
          <Route path='/moveisinfo/:id' element={<MoveisInfo/>}/> 
        </Route>
        
        <Route path='/*' element={<h1>Not Found 404</h1>}/>
      </Routes>

     
    </Router>
  )
}

export default AppRouters