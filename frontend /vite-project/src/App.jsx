import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function APIcall() {
      try {
        const response = await fetch("http://localhost:8080/products");
        const data = await response.json();

        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    APIcall();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.thumbnail}
            alt={product.title}
            width="200"
          />

          <h2>{product.title}</h2>

          <p>{product.description}</p>

          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;