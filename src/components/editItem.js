import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditItem() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/${id}`)
      .then((response) => {
        setName(response.data.name);
        setDescription(response.data.description);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const updateItem = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/items/${id}`, { name, description })
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <form onSubmit={updateItem}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
}

export default EditItem;
