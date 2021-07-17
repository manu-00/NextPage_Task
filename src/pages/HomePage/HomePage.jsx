import React, { useState, useEffect } from 'react';
import Table from '../../components/table/Table';
import CartIcon from '../../components/cartIcon/CartIcon';
import './HomePage.styles.css';
import CountDown from '../../components/countDown/countDown';
import { connect } from 'react-redux';
import getAllCourses from '../../redux/Table/table.actions';
import { Redirect } from 'react-router-dom';

const HomePage=({courses,getAllCourses})=>{

let [freeSeats]=useState(Math.floor(Math.random() * 10)+5)
useEffect(()=>{getAllCourses()},[]);


if (courses==0) {
    return <Redirect to='/' />
}
else{
    for(let i=0;i<7;i++){
        var k=(Math.floor(Math.random() * courses.length));
        courses[k].availability=0;
       }
    
    return (
        <div>
        <div className='header'>
        <CountDown />
        <h1>Claim Your Free Trail Class</h1>
        <CartIcon />
        </div> 
        <div className='header'>
            <h3>Class Schedule</h3>
            <p>Free Seats Left:{freeSeats}</p>
        </div>
        <Table courses={courses} />
        </div>
     )
 }
}

const mapStateToProps=state=>({
    courses:state.courses
  });

const mapDispatchToProps=dispatch=>({
    getAllCourses:()=>dispatch(getAllCourses())
});

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);