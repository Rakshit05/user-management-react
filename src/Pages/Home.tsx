import React from 'react'
import {  useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Home = () => {



  const dispatch = useDispatch();
  const navi = useNavigate();
  const logoutHandler = () => {
    dispatch({ type: 'logout' });
    console.log("logout handler called");
    navi('/');
  };
  const data = JSON.parse(localStorage.getItem("login"));

  return (
    <>
      {data === null ?  <Navigate to='/' /> : null }


     { data !== null && <div className='home-page-main'>
        <div className='user-details'>
          <img src={data.img} alt='' />
          <h3>{data.username}</h3>
          <h3>{data.number}</h3>
          <h3>{data.email}</h3>
          <Link to='/' > <button onClick={logoutHandler} >Logout</button> </Link>
        </div>
      </div> }


    </>
  )
}
export default Home;