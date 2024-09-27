import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [Products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");

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
      body: JSON.stringify({ name: newProduct, price: Price, description: Description  }),
    })
      .then((res) => res.json())
      .then((Product) => setProducts([...Products, Product]));
    setNewProduct("");
    
  };

  return (<>
  
  <div className=""> 

    <h1>product number one </h1>
  <input type="text" value={addProduct}></input>
    <button onClick={addProduct}>new product</button>

  </div>

  <div className="">
    
  <h1> second product</h1>
  <input type="text" value={addProduct}></input>
  <button onClick={addProduct}> add product </button>  


   </div>



  </>
)
;

export default App;

