import React, { useEffect, useState } from "react";
import "./Pro.css"

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://636dd589b567eed48aca76f3.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div  className="main_pro_div">
      {products.map((product) => (
        <div className="pro_div" key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.avatar} alt={product.name} />
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
