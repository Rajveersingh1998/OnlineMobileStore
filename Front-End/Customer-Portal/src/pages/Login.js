import './Login.css'
import { useState } from 'react'
import axios from "axios";
import { url } from "../common/constants";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signinAction } from './../actions/signinActions';
import { addToCartAction } from './../actions/cartActions';
import { Link } from 'react-router-dom';

import React, { Component } from "react";
import Swal from "sweetalert2";
// import { ToastContainer, toast } from 'react-toastify';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Login = () => {
  //to maintain the state use useState hook
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const addToCart = (user) => {
    console.log(user.id)
    axios.get(url + '/customer/cartItems/' + user.id).then((response) => {
      const res = response.data;
      if (res.status === "OK") {
        let cartsd = res.result
        console.log(cartsd)

        for (let index = 0; index < cartsd.length; index++) {
          dispatch(addToCartAction(cartsd[index]))
        }
      } else {
        //  console.log(result.error);
        toast.error('Something went wrong ...🤔',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
      }
    });
  }
  const LoginUser = () => {
    if (email.length === 0) {
      toast.error('Please Enter Email',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
    } else if (password.length === 0) {
      toast.error('Please Enter Password',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
    } else {
      let data = {
        email: email,
        password: password,
        role: 'CUSTOMER'
      };
      // send user info to the API
      console.log(data);
      axios.post(url + "/customer/signin", data).then((response) => {
        const res = response.data;
        if (res.status === "OK") {
          console.log(res);
          dispatch(signinAction(res.result));
          addToCart(res.result);

          const Toast = Swal.mixin({
            toast: true,
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })

          //used to redirect to another component
          history.push('/')

        } else {
          // console.log(result.error);  //Akki
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong..! 🤔',
            text: 'Email or Password Incorrect!',
            footer: '<a href="/admin/signin">Why do I have this issue?</a>'
          })
        }
      });
    }
  }

  return (
    <div className='sigin'>
      <div className="form-control">
        <h1 className="page-title">Sign in</h1>
        <div className="mb-3">
          <label><b>Email</b></label>
          <input
            onChange={(event) => {//able to type something in textbox : event get generated
              setEmail(event.target.value)
            }}
            placeholder="enter your email"
            className="form-control"
            type="email"
          />
        </div>
        <div className="mb-3">
          <label><b>Password</b></label>
          <input
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            placeholder="enter your password"
            className="form-control"
            type="password"
          />
        </div>
        <div className="mb-3">
          <button onClick={LoginUser} className="btn btn-success">
            Login
          </button>
          &emsp;


          <a href="/signup">
            <button className="btn btn-success">SignUp</button></a>


        </div>
      </div>
    </div>

  )
}

export default Login
