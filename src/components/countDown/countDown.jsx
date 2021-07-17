import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const CountDown=({history})=>{

let [countDown,setCountDown]=useState(Math.floor(Math.random() * 30)+30)
useEffect(()=>{
    if(countDown==0){
        return history.push('/cart')
    }
    setTimeout(()=>setCountDown(countDown-1),1000)
});

return (
    <p>Time Left: {countDown} Seconds</p>
 )
}

export default withRouter(CountDown);