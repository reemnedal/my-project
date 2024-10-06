import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Nav";
 
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
      
  }, []);

  return (

<>
<Nav/>
{/* 
<div>
    <h1>Products</h1>
    <ul>
        {products.map((product) => (
            <li key={product.id}>{product.title}</li>
        ))}
    </ul>
</div> */}
{products.map((product) => (

<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src= {product.image} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2" key={product.id}>Title :{product.title}</div>
    <p class="text-gray-700 text-base">
    Description:{product.description}
    
     </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ID:{product.id}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">RatingID:{product.rating.rate}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Count:{product.rating.count}</span>
  </div>
</div>  ))}
 </> );
}

export default App