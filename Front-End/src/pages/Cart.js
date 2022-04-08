import { useSelector } from 'react-redux'
import "./Cart.css";
import { url } from "../common/constants";
import { useState, useEffect } from 'react'
import axios from 'axios'
import CartItems from './../components/CartItems';
import { useHistory } from "react-router-dom";
import EmptyCart from '../components/EmptyCart';


const Cart = () => {
  const [cartdata, setCartData] = useState([]);
  const history = useHistory();

  const isSignin = useSelector((state) => state.isSignin);
  const cartItems = useSelector((state) => state.cartItems);

  if(isSignin.status === false){
    alert('please signin first!!')
    history.push('/login')
  }
  
  useEffect(() => {
    getcartItems()
  }, [])
 
var cartitems = 0;

const getcartItems = () => {
  console.log(isSignin.user.id)
  axios.get(url + '/customer/cartItems/' + isSignin.user.id).then((response) => {
    const res = response.data
    console.log(res.result);
    if (res.status === 'OK') {
      // setCartData(res.result)
      // console.log(res.result);
      if(res.result == 0){
        console.log("in length 0")
        history.push("/emptycart")
      }else{
        console.log("in else")
        setCartData(res.result)
      }
    } else {
      alert('please login first!')
      history.push('/login');
    }
  })
}


  return (
    <div>
      <h1>My Cart</h1>
          <CartItems
          onItemSelect={getcartItems}
          items={cartdata}
        />
    </div>
  );
}

export default Cart
