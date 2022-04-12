import axios from "axios";
import "./Signup.css";
import { useState } from "react";
import { url } from "../common/constants";
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";
// import { ToastContainer, toast } from 'react-toastify';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()



const Signup = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [umob, setUmob] = useState("");
  const [ulocality, setUlocality] = useState("");
  const [ucity, setUcity] = useState("");
  const [ustate, setUstate] = useState("");
  const [upin, setUpin] = useState(0);
  // const [role, setRole] = useState("");
  const history = useHistory()


  const signupUser = () => {

    if (fname.length === 0) {
      toast.error('Please Enter First-Name',
      { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
    } else if (lname.length === 0) {
      toast.error('Please Enter Last-Name',
      { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
    } else if (email.length === 0) {
      toast.error('Please Enter Email',
      { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
    } else if (password.length === 0) {
      toast.error('Please Enter Password',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
    } else if (umob.length === 0) {
      toast.error('Please Enter Mobile Number',
      { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
    } else if (ulocality.length === 0) {
      toast.error('Please Enter your Locality',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
    } else if (ucity.length === 0) {
      toast.error('Please Enter your City',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
    } else if (ustate.length === 0) {
      toast.error('Please Enter your State',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
    } else if (upin.length === 0) {
      toast.error('Please Enter location Pincode',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
      // } else if (role.length === 0) {
      //   alert("enter role");
    } else {
      //send data in json format
      let data = {
        firstName: fname,
        lastName: lname,
        email: email,
        password: password,
        userMob: umob,
        ulocality: ulocality,
        ucity: ucity,
        ustate: ustate,
        pincode: upin,
        // role: role
      };

      // send user info to the API
      axios.post(url + "/customer/signup", data).then((response) => {
        const result = response.data;
        if (result.status === "OK") {

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
            title: 'Sign-Up Successfull.. 😀'
          })

          history.push('/login')
          
        } else {
          toast.error('Something went wrong..!  🤔',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
        }
      });
    }
  };

  return (

    <div>
      

      <div class="modal-lg sign-up">
        <div className="form-control">
          <h1 className="page-title">Sign up</h1>
          <div className="mb-3">
            <label><b>First Name</b></label>
            <input
              onChange={(event) => {
                // updating the state with user entered value
                setfname(event.target.value);
              }}
              placeholder="enter your first name"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label><b>Last Name</b></label>
            <input
              onChange={(event) => {
                setlname(event.target.value)
              }}
              placeholder="enter your last name"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label><b>Email</b></label>
            <input
              onChange={(event) => {
                // updating the state with user entered value
                setemail(event.target.value);
              }}
              placeholder="enter your last name"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label><b>Password</b></label>
            <input
              onChange={(event) => {
                // updating the state with user entered value
                setpassword(event.target.value);
              }}
              placeholder="enter your password"
              className="form-control"
              type="password"
            />
          </div>
          <div className="mb-3">
            <label><b>Mobile No</b></label>
            <input
              onChange={(event) => {
                // updating the state with user entered value
                setUmob(event.target.value);
              }}
              placeholder="enter your mobile no"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label><b>Locality</b></label>
            <input
              onChange={(event) => {
                // updating the state with user entered value
                setUlocality(event.target.value);
              }}
              placeholder="enter your locality"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label><b>City</b></label>
            <input
              onChange={(event) => {
                // updating the state with user entered value
                setUcity(event.target.value);
              }}
              placeholder="enter your city"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label><b>State</b></label>
            <input
              onChange={(event) => {
                // updating the state with user entered value
                setUstate(event.target.value);
              }}
              placeholder="enter your state"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label><b>Pincode</b></label>
            <input
              onChange={(event) => {
                // updating the state with user entered value
                setUpin(event.target.value);
              }}
              placeholder="enter your pin"
              className="form-control"
              type="text"
            />
          </div>
          {/* <div className="mb-3">
          <label><b>Role</b></label>
         <input
          onChange={(event) => {
            // updating the state with user entered value
            setRole(event.target.value);
          }}
          placeholder="enter your role"
          className="form-control"
          type="text"
        />
          </div> */}
          <div className="mb-3">
            <button onClick={signupUser} className="btn btn-success">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Signup;
