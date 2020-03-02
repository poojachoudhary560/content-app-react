import React, { useState, useEffect } from 'react';
import './App.css';

function Item({ match }) {
    useEffect(() => {
        fetchItem();
        console.log(match);
    },[]);

    const [item, setItem] = useState({});
    const [user, setUser] = useState({});
    const fetchItem = async() => {
       const fetchItemDetail = await fetch(`https://jsonplaceholder.typicode.com/todos/${match.params.id}`);
       const data = await fetchItemDetail.json();
       const fetchUserDetail = await fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
       const userData = await fetchUserDetail.json();
       console.log(data);
       console.log(userData);
       setItem(data);
       setUser(userData);
    }
  return (
    <div className="App">
        <h1>{item.title}</h1>
        <h4>by {user.name}</h4>
    </div>
  );
}

export default Item;
