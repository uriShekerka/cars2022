import axios from 'axios'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Line from './pages/line'
import Page1 from './pages/page1'






const Main = () => {

  const [moveis, setMoveis] = useState([])
  const [loading, setLoading] = useState(true);
  const [years, setYears] = useState()
  const selectBoxRef = useRef()
  const params = useParams();

  const doApi = async () => {
    try {
      setLoading(true)
      console.log(moveis);
      let url = `http://www.omdbapi.com/?s=${params.search || "bank"}&y=${years || 2020}&apikey=b5b741c5`
      const { data } = await axios.get(url)
      console.log(data.Search)
      setMoveis(data.Search);
      console.log(params.search);
      setLoading(false)

    } catch (err) {
      console.log(err)
    }
  }

  let selectYear = [];
  const selectYearA = () => {
    let year = new Date().getFullYear();
    for (let i = 0; i < 50; i++) {
      selectYear[i] = year - i;
    }
  }
  selectYearA();


  useEffect(() => {
    doApi()
  }, [params, years])


  return (
    <div className='bg-dark'>
      <div className='select p-2'>
        <select ref={selectBoxRef} className="selectA w-100   text-center mt-1"
          onChange={() => {
            setYears(selectBoxRef.current.value)
          }} >
          <option>Select Year...</option>
          {selectYear.map((item => {
            return (

              <option value={item}>{item}</option>
            )
          }))}
        </select>
       
        </div>
        <Line/>


      <div className='bg-dark'>
        {moveis ? (
          <div>
            {loading ? (
              
                <img className='loading' src="https://media1.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif?cid=ecf05e472p7mvpsb0dcq9islfb69ijc11ayxw41u0eh5qik5&rid=giphy.gif&ct=g" alt="" />
               
            ) : (
              <div className="container d-flex bg-dark">
                <div className="d-flex flex-wrap justify-content-start ">
                  {moveis.map((item, i) => {
                    return <Page1 key={i} item={item} />;
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <p className='text-danger'> There is not results</p>
        )}
      </div>
    </div>
  );
}

export default Main