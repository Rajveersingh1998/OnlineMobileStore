import './Login.css'
import { useState } from 'react'
import axios from "axios";
import { url } from "../common/constants";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signinAction } from './../actions/signinActions';
// added by me
import React, { Component } from "react";
import Swal from "sweetalert2";
// import { ToastContainer, toast } from 'react-toastify';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  //to maintain the state use useState hook
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  
  toast.configure()
  const LoginUser = () => {
    if (email.length === 0) {
      toast.error('Please Enter Email',
           {autoClose:1000, position: toast.POSITION.BOTTOM_LEFT})
    } else if (password.length === 0) {
      toast.error('Please Enter Password',
           {autoClose:1000, position: toast.POSITION.BOTTOM_LEFT})
    } else {
      let data = {
        email: email,
        password: password,
        role: "ADMIN"
      };

  

        // if (accept) {
          // send user info to the API
          axios.post(url + "/admin/signin", data).then((response) => {
            const result = response.data;
            if (result.status === "OK") {
              dispatch(signinAction(result.data));

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
              // toast.error('Runtime error');
             
              
              history.push('/')
              // toast('We love cookies, whats about you?','question','bottom-right') => showConfirmButton('Accept','#3085d6');


            } else {
              console.log(result.error);  //Akki
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                text: 'Email or Password Incorrect!',
                footer: '<a href="/admin/signin">Why do I have this issue?</a>'
              })
            
              // alert("failed to login..plz try again!!");
            }
          });
        // }
      // })() //(async Ended)
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>

      <div className="col-md-6">
        <label>Email</label>
        <input
          onChange={(event) => {//able to type something in textbox : event get generated
            setEmail(event.target.value)
          }}
          placeholder="enter your email"
          className="form-control"
          type="email"
          autoFocus
        />
      </div>
      <div className="col-md-6">
        <label>Password</label>
        <input
          onChange={(event) => {
            setPassword(event.target.value)
          }}
          placeholder="enter your password"
          className="form-control"
          type="password"
        />
      </div>
      <br />
      <div className="col-md-6">
        <button onClick={LoginUser} className="btn btn-success">
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
