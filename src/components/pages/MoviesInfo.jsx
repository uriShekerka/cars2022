
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const MoveisInfo = () => {

    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const nav = useNavigate();

    const doApiInfo = async () => {
        setLoading(true)
        let url = `http://www.omdbapi.com/?i=${params.id}&apikey=b5b741c5`
        const { data } = await axios.get(url)
        console.log(data);
        setInfo(data);
        setLoading(false);
    }
    useEffect(() => {
        doApiInfo()
    }, [])

    return (
        <div className='bg-dark'>
            {loading ? <h1 className='foundCss text-warning font-black text-center mt-2'>Loading...</h1> :
                <div className='container-fluid '>
                    <div className="container">
                        <div className="row mx-auto justify-center">
                            <div className='col-md-4  pt-4 mb-3 shadow '>
                                <img src={info.Poster} alt="" className='width="350" ' />
                            </div>
                            <div className=' col-md-7 pt-4 mb-5  text-md-start text-center text-white '>
                                <h2 className='font-bold mt-2 fs-1'>{info.Title}</h2>
                                <p className='mt-2'>{info.Plot}</p>
                                <p className='p-2 mr-1'>Released:  {info.Released}</p>
                                <h6 className='mt-2'>Gener : {info.Genre}</h6>
                                <p className='mt-2'>Actors : {info.Actors}</p >
                                <div className='d-flex mt-3'>
                                    <div className='text-white bg-dark'>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div>
                                            <img width="22" src="../star.png" alt="" />
                                    </div>
                                    <div>
                                            <img width="22" src="../half_star.png" alt="" />
                                    </div>
                                </div>
                                <div className='mt-3'>
                                <button onClick={() =>{
                                    nav(-1)
                                }} className='btn btn-warning text-light'>Back</button>
                                </div>


                            </div>



                        </div>
                    </div>
                </div>
            }
         
        </div>
    )
}



    export default MoveisInfo