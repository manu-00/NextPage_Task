import React from 'react';
import {ReactComponent as CartSvg} from '../../assets/shopping-bag.svg';
import './CartIcon.styles.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const CartIcon=({history,course})=>{
    
 return(<div className='cart-icon' onClick={()=>history.push('/cart')} > 
        <CartSvg className='shopping-icon'/>
        <span className='item-count'>{course.length}</span>
        </div>
        )
}

const mapStateToProps=state=>({
    course:state.cart
})

export default withRouter(connect(mapStateToProps)(CartIcon));