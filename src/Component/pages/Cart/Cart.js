
import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

function Cart() {
  const { cart, updateCartQuantity } = useContext(CartContext);

  const handleIncrement = (item) => {
    updateCartQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateCartQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="row g-0">
               
                  <div className="col-md-4">
                    <img
                      src={item.images}
                      className="img-fluid rounded-start"
                      alt={item.name}
                    />
                  </div>
            
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <h6>Brand: {item.brand}</h6>
                      <h6>Material: {item.material}</h6>
                      <h6>Size: {item.size}</h6>
                      <h6>Price: Rs. {item.price}</h6>
                      <button className="btn btn-success" >Buy Now</button>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="btn-group">
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDecrement(item)}
                          >
                            -
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => handleIncrement(item)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card-footer">
                  <div className="d-flex">
                    {item.subImages &&
                      item.subImages.map((subImage, subIndex) => (
                        <img
                          key={subIndex}
                          src={subImage}
                          alt={`${item.name} thumbnail`}
                          className="img-thumbnail mx-1"
                          style={{ width: "60px", height: "60px" }}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
