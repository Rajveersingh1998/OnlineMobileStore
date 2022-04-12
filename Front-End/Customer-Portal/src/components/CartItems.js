 import "./CartItems.css";
import { useDispatch } from "react-redux";
import { removeFromCartAction } from "../actions/cartActions";
import Orderdetails from "../pages/Orderdetails";
import axios from "axios";
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from "react";
import { url } from "../common/constants";

const CartItems = ({ items, onItemSelect }) => {
  console.log(items)


  const dispatch = useDispatch();
  const history = useHistory();


  const Orderdetails = (order) => {
    let selectedItem = {
      mid:order.mobileId.id,
      mthumb:order.mobileId.mobImage,
      mname:order.mobileId.mname,
      total:order.totalAmt,
      productQty:order.qty,
      productId:order.id,
      RAM:order.ram,
      Storage:order.storage
    };
    console.log(selectedItem)
    history.push("/odetails", { order: selectedItem });
  };

  const removeFromCart = (product) => {
    console.log(product.id)
    axios.delete(url + "/customer/cart/" + product.id).then((response) => {
      const res = response.data;
      if (res.status === "OK") {
        dispatch(removeFromCartAction(product));
        history.push("/item-removed") ;  
      } else {
        alert("failed to remove product!!!");
      }
    });
  };

  return (
    <div className="slider-container">
      {items.map((item) => {
        return (
          <div
            className="item-container"
            onClick={() => {
              onItemSelect(item);
            }}
          >
            <div className="style">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={'/images/'+item.mobileId.mobImage}
                    className="image"
                    alt=" "
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="card-text">
                      <h4>
                        {item.mobileId.mname}({item.mobileId.mcolor})
                      </h4>
                    </div>
                    <div className="card-text">
                      <h5>Quantity :{item.qty} </h5>
                    </div>
                    <div className="card-text">
                      <h6>Ram :{item.ram} </h6>
                    </div>
                    <div className="card-text">
                      <h6>Storage :{item.storage} </h6>
                    </div>
                    <div className="card-text">
                      <h2>Price :{item.mobileId.mprice}/-</h2>
                    </div>
                    <div className="card-text">
                    <button onClick={()=>{
                     
                    Orderdetails(item);
                    }} type="button" class="btn btn-success">
                     Continue
                    </button>
                    &emsp;                        
                      <button
                        class="btn btn-danger"
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
