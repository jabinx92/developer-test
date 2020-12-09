import React, { useState } from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';
import './index.css'


function WishList () {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [count, setCount] = useState(0);
    const [addItem, setAddItem] = useState([])
    const [item, setItem] = useState({})

    const greenButton = {
        background: "#90ee90",
        fontWeight: "bold",
        height: "40px",
        width: "100px",
        margin: "0px 50px 25px 150px",

    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setItem({
            id: count,
            name: name
        });
        setAddItem([...addItem, item])
        console.log(addItem)
        setCount(count + 1)
        setName("")
        setItem({})
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
                {/* {addItem.map((item, index)=> {
                    return (
                    <div>{item.add}</div>
                    )
                })} */}
            </ul>
            

            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <input style={greenButton} type="submit" value="Add"></input>
            </form>
            <button onClick={() => {dispatch()}}>Submit</button>
        </div>
    )
} 

export default WishList