import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [Products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState("");

  useEffect(() => {
    // Use the Render backend URL here:
    fetch("https://products-cu9j.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addProduct = () => {
    fetch("https://products-cu9j.onrender.com/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newProduct, completed: false }),
    })
      .then((res) => res.json())
      .then((Product) => setProducts([...Products, Product]));
    setNewProduct("");
  };

  return <>
  
  <div className=""> 

  <div className=""> 

    <h1>product number one </h1>
    <button onClick={addProduct}>new product {addProduct}</button>

  </div>


  <div className="">
    
  <h1> second product</h1>
  <button onClick={addProduct}> add product </button>  


   </div>

  </div>

  </>;
};

export default App;

<div>
  <h1>To-do List</h1>
  <input
    type="text"
    value={newProduct}
    onChange={(e) => setNewProduct(e.target.value)}
  />
  <button onClick={addProduct}>Add Task</button>
  <ul>
    {Products.map((Product) => (
      <li key={Product.id}>{Product.title}</li>
    ))}
  </ul>
</div>;