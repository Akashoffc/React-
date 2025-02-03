import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import data from "./data.json";
import './product.css'


function Product() {
  const{ addToCart } = useContext(CartContext);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Shop by Brand</h2>
      <div className="row d-flex flex-wrap">
        {data.map((item) => (
          <div key={item.id} className="col-md-2 mx">
            
            <div className="card text-center">
            <div
              className="card text-center border-0 shadow-sm h-100"/>
              
              <img
                src={item.images}
                className="card-img-top"
                height="250px"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h5>{item.brand}</h5>
                <h5>{item.material}</h5>
                <h5>{item.size}</h5>
                <h5>Rs: {item.price}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(item)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
