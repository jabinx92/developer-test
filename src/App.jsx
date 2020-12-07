import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';
import './index.css'


function WishList () {
    const [name, setName] = useState("");


    return (
        <div className="container">
           <h1>MY WISHLIST</h1>
      
        </div>
    )
} 

export default WishList