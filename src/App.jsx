import React, { useState } from 'react';
import {connect} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';
import './index.css'


function WishList () {
    const [name, setName] = useState("");
    const [count, setCount] = useState(0);


    const handleSubmit = (event) => {
        event.preventDefault();
        setName(event)
        console.log(name);
    };

    const clearForm = () => {
        setName("")
        console.log(name)
        alert('Your wishlist has been submitted')
    }

    return (
        <div className="container">
           <h1>MY WISHLIST</h1>
            
            <ul>
                <div>Coffee</div>
                <div>Tea</div>
                <div>Milk</div>

            </ul>
            

            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <input type="submit" value="Add"></input>
            </form>
            <button onClick={() => {clearForm()}}>Submit</button>
        </div>
    )
} 

export default WishList