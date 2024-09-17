import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const addItem = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/items", { name, description })
      .then(() => {
        setName("");
        setDescription("");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
