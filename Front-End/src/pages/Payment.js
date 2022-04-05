import { url } from '../common/constants'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useLocation } from 'react-router'
import { useHistory } from "react-router-dom";
// import { setISODay } from 'date-fns'

import React, { Component } from "react";
import Swal from "sweetalert2";
// import { ToastContainer, toast } from 'react-toastify';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Payment = () => {

const isSignin = useSelector((state) => state.isSignin);
  
  const [cardNumber, setCardNumber] = useState('')
  const [accHolderName, setAccHolderName] = useState('')
  const [date, setDate] = useState('')
  const [cvv, setCvv] = useState(0)
  const [oid, setOid] = useState(0)

  const history = useHistory()

  const location = useLocation()
  const totalAmount = location.state.totalAmount
  const orderdetails = location.state.odata;
  console.log(orderdetails)

  useEffect(() => {
    //getFinalOrder()
  }, [])

//   const getFinalOrder = () => {


//     axios.get(url + "/payment/" + isSignin.user.cid).then((response) => {
//       const result = response.data;
//       if (result.status === "success") {
//         console.log(result.data)
//         // let cartsd=result.data
//         // console.log(cartsd)
//         setFinalOrder(result.data)
//       } else {
//         console.log(result.error);
//         alert("failed to get items from cart from perticular user..plz try again!!");
//       }
//     });
//   }

  const UserPayment = () => {

    const current = new Date();
    const currdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    if (accHolderName.length === 0) {
      toast.error("Please Enter Account Holder's Name",
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
    } else if (cardNumber.length === 0) {
      toast.error("Please Enter Card Number",
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
    }
    else if (date.length === 0 ) {
      toast.error("Please Enter Card expiry Date",
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
    }
    else if (cvv === 0) {
      toast.error("Please Enter Card CVV number",
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
    }
    else {
    
      
      let orderdetail = {
        odate: orderdetails.orderdate,
        totalPrice: totalAmount,
        uid: isSignin.user.id,
        mid: orderdetails.mid,
        ddate: orderdetails.deliverydate,
      };
      console.log(orderdetail)
      axios.post(url + "/customer/orders", orderdetail).then((response) => {
  
         const res = response.data;
         console.log(res.result)
         if(res.status === "OK"){
          setOid(res.result)
          makePayment(res.result);
         }else{
           alert("EXCEPTIONS")
           history.push("/");
         }
        
      });
      // axios.post(url + "/orders/getOid/", orderdetail).then((response) => {
      //   const result = response.data;
      //   // console.log(result.data[0].oid);
      //   // setOid(result.data[0].oid)
      //   makePayment(result.data[0].oid);
      // });
    }
    
    const makePayment = (orderId) => {
     console.log(orderId)
    var data = {
      oid: orderId,
      accHolderName: accHolderName,
      cardNumber: cardNumber,
      uid: isSignin.user.id,
      amount: totalAmount

    }
    
    axios.post(url + "/customer/payment", data).then((response) => {
      const res = response.data;
      console.log(res.result)
      if (res.status === "OK") {
        console.log(res.result)
        history.push('/oconfirm' ,{productId:orderdetails.prodId})
      } else {
  
        toast.error("failed to get items from cart..!!",
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
      }
    });
    }
  }

return (

    <div class="modal-lg sign-in">
      <div className="form-control">
        <h2 className="page-title">Your Payment Details</h2>
        <div class="col-12">
          <label class="form-label"><b>Card Holder's Name</b></label>
          <input onChange={(event) => {
            setAccHolderName(event.target.value)
          }}
            type="text" class="form-control" placeholder="Enter card holder name" />
        </div>
        <div class="col-12">
          <label class="form-label"><b>Card Number</b></label>
          <input onChange={(event) => {
            setCardNumber(event.target.value)
          }}
            type="number" class="form-control" placeholder="Enter card number" />
        </div>
        <div class="col-md-6">
          <label class="form-label"><b>Expiration Date</b></label>
          <input onChange={(event) => {
            setDate(event.target.value)
          }}
            type="date" class="form-control" />
        </div>
        <div class="col-md-6">
          <label class="form-label"><b>CVV</b></label>
          <input onChange={(event) => {
            setCvv(event.target.value)
          }}
            type="number" class="form-control" placeholder="Enter CVV Number" />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <button onClick={() => {
            UserPayment()
          }} class="btn btn-success">Confirm Payment</button>&emsp;
          <button onClick={() => {
            // history.push('/cart')
            history.push('/cart')
          }} class="btn btn-warning">Back</button>
        </div>
        <div class="col-6">
        </div>
      </div>
    </div>
  )
}

export default Payment