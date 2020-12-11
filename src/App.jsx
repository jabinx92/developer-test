import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {addItem, deleteItem, clearItem} from './redux/actions';
import './index.css'


function WishList () {
    const todos = useSelector(state => state);
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const greenButton = {
        background: "#90ee90",
        fontWeight: "bold",
        height: "40px",
        width: "100px",
        margin: "0px 50px 25px 150px",
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(todos){
            if (todos.some(item => item.name === name)){
                alert('This item has already been added')
                return setName("")
            }
        }
        
        if (name !== "") {
            dispatch(addItem(name));
            setName("")
        } else {
            alert('This item can not be empty.')
        }
    };

    const clearForm = () => {
        dispatch(clearItem([]))
        setName("")
    }

    const clearId = (id) => {
        dispatch(deleteItem(id));
    }

    return (
        <div className="container">
           <h1>MY WISHLIST</h1>
            <ul>
                { todos ? 
                todos.map((item, index)=> {
                    return (
                    <div style={{cursor: "pointer"}} onClick={() => {
                        clearId(item.id)
                    }}>{item.name}</div>
                    )
                }) : <></>}
            </ul>
            <form onSubmit={onSubmit}>
                <input type="text" autoFocus value={name} onChange={e => setName(e.target.value)}/>
                <input style={greenButton} type="submit" value="Add"></input>
            </form>
            <button onClick={() => {
                clearForm()
                }}>Submit</button>
        </div>
    )
} 

export default WishList