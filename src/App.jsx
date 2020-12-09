import React, { useState } from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';
import './index.css'


function WishList () {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [count, setCount] = useState(0);
    const [addItem, setAddItem] = useState([])

    const greenButton = {
        background: "#90ee90",
        fontWeight: "bold",
        height: "40px",
        width: "100px",
        margin: "0px 50px 25px 150px",
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if (name == "") return alert("Item name is required");
        
        setAddItem([...addItem, {id:count, name: name}])
        setCount(count + 1)
        setName("")
        console.log(addItem)
    };

    const clearForm = () => {
        setAddItem([])
        console.log(name)
        alert('Your wishlist has been submitted')
    }

    const clearId = (id) => {
        const newItems = addItem.filter((item) => item.id !== id);
        setAddItem(newItems);
    }

    return (
        <div className="container">
           <h1>MY WISHLIST</h1>
            
            <ul>
                { addItem.length ? 
                addItem.map((item, index)=> {
                    return (
                    <div onClick={() => {
                        clearId(item.id)
                    }}>{item.name}</div>
                    )
                }) : <></>}
            </ul>
            

            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <input style={greenButton} type="submit" value="Add"></input>
            </form>
            <button onClick={() => {clearForm()}}>Submit</button>
        </div>
    )
} 

export default WishList