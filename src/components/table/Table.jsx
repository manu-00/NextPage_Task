import React,{useEffect} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import TableRows from './TableRow';

 const Table=({courses,removeCourse})=>{
  return (
    <div>
    <ReactBootStrap.Table striped bordered hover>
    <thead>
        <tr>
          <th>Subject</th>
          <th>Date</th>
          <th>Time</th>
          <th>Availability</th>
          <th>Booking</th>
        </tr>
      </thead>
      <tbody>
         {courses.map((tableDetail,index)=><TableRows tableDetail={tableDetail} removeCourse={removeCourse} index={index} />)}
      </tbody>
    </ReactBootStrap.Table>  
    </div>
  )
}

export default Table;