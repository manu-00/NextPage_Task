import React,{useState} from 'react';
import addCourse from '../../redux/Cart/cart.actions';
import { connect } from 'react-redux';

const TableRows=({tableDetail,index,addCourse,removeCourse})=>{

    let btn=<button onClick={()=>{
    setTableRow({...tableRow,availability:tableRow.availability-1})
    return addCourse(tableRow)
    }}>Book Now</button>

    let [tableRow,setTableRow]=useState(tableDetail);

    if(tableDetail.availability==0){
     btn=<button disabled>Full</button>
    }
    if (removeCourse) {
        btn=<button onClick={()=>removeCourse(tableRow)}>Cancel</button>
    }
    return(
      <tr key={index}>
        <td>{tableRow.subject}</td>
        <td>{tableRow.date}</td>
        <td>{tableRow.time}</td>
        <td>{tableRow.availability}</td>
        <td>{btn}</td>
      </tr>
    )
  }

const mapDispatchToProps=dispatch=>({
  addCourse:course=>dispatch(addCourse(course))  
});  

export default connect(null,mapDispatchToProps)(TableRows);  