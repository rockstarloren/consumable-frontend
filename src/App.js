import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemList from "./components/itemList";
import AddItem from "./components/addItem";
import EditItem from "./components/editItem";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/edit/:id" element={<EditItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
