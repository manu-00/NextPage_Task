import React from 'react';
import './CartPage.styles.css';
import {connect} from 'react-redux';
import Table from '../../components/table/Table';
import { removeCourse } from '../../redux/Cart/cart.actions';

 const CartPage=({cart,removeCourse})=>{

    return(
        <div>
         <div className='header'>
         <h1>CART</h1>
         </div>    
        <Table courses={cart} removeCourse={removeCourse} />
        </div>
    )
}

const mapStateToProps=state=>({
    cart:state.cart
});

const mapDispatchToProps=dispatch=>({
    removeCourse:remove=>dispatch(removeCourse(remove))
});

export default connect(mapStateToProps,mapDispatchToProps)(CartPage);