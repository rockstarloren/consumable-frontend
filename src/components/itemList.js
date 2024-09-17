import React, { useState, useEffect } from "react";
import axios from "axios";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/items")
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:5000/items/${id}`)
      .then(() => setItems(items.filter((item) => item._id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}: {item.description}
            <a href={`/edit/${item._id}`}>Edit</a>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
