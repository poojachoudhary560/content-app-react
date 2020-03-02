import React, { useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);
    const fetchItems = async() => {
       const data = await fetch('https://jsonplaceholder.typicode.com/todos');
       const items = await data.json();
       console.log(items);
       //console.log(data);
        setItems(items);
    }
  return (
    <div className="App">
      {items.map(item => (
        <h4 key={item.id}>
            <Link to={`/shop/${item.id }`}>{item.title}</Link>
        </h4>
      ))}
    </div>
  );
}

export default Shop;
