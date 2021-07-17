import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';

const App=()=>{
    return (
        <div className="container">
            <Route exact path='/' component={HomePage} /> 
            <Route exact path='/cart' component={CartPage} />
        </div>
    );
}

export default App;
