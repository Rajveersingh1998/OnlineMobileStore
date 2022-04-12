import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Brands from "./pages/Brands";
import SpecificationList from "./pages/SpecificationList";
import MobileListByBrand from "./pages/MobileListByBrand";
import Cart from "./pages/Cart";
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from "axios";
import Buynow from './pages/Buynow';
import Search from "./components/Search";
import Orderdetails from './pages/Orderdetails';
import Orderconfirm from './pages/Orderconfirm';
import Payment from './pages/Payment';
import ItemRemoved from './pages/ItemRemoved';
import EmptyCart from './components/EmptyCart';
import MobilesNotAvailable from './components/MobilesNotAvailable';
import HomePageNavBar from './pages/HomePageNavBar';

import Feedback from './pages/Feedback';


function App() {
   // listen on the global store's cartItems
   const cartItems = useSelector((state) => state.cartItems)
   const isSignin = useSelector((state) => state.isSignin);
   const [items, setItems] = useState([])

   useEffect(() => {
     if(isSignin.status === true){
      getItems()
     }
  }, [])

  const getItems = () => {
    // rest API
    const url = 'http://localhost:4000'

    // send the GET request
    console.log(isSignin.user.uid)
    axios.get(url + '/cart/byuser'+ isSignin.user.uid).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setItems(result.data)
        console.log(result.data)
      } else {
        alert('error occured while getting cart items')
      }
    })
    // console.log(items.length)
    // console.log(items)
  }

  return (
    <div>
      <BrowserRouter>
        
      <HomePageNavBar/>
        

        <div className="container">

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />          
            <Route path="/brands" component={Brands} />
            <Route path="/mobile-list" component={MobileListByBrand} />
            <Route path="/specs" component={SpecificationList} />
            <Route path="/cart" component={Cart} />
            <Route path="/buynow" component={Buynow} />
            <Route path="/search" component={Search} />
            <Route path="/odetails" component={Orderdetails} />
            <Route path="/payment" component={Payment} />
            <Route path="/oconfirm" component={Orderconfirm} />
            <Route path="/item-removed" component={ItemRemoved}/>
            <Route path="/emptycart" component={EmptyCart}/>
            <Route path="/notavailiable" component={MobilesNotAvailable}/>
            <Route path="/feedback" component={Feedback} />
          </Switch>
          
        </div>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
