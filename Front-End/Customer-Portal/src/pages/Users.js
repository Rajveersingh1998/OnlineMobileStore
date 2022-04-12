import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../common/constants'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
// added by me
import React, { Component } from "react";
import Swal from "sweetalert2";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
const Users = () => {
  // maintain the state
  const [users, setUsers] = useState([])
  const isSignin = useSelector((state) => state.isSignin);
  const history = useHistory();

  // do something automatically
  // []:
  // - accepts a variable and keeps watching the change
  // - when the variable state changes, the function (1st param) gets called
  // - keep the second param empty to execute something when the component gets loaded

  if (isSignin.status === false) {
    toast.error('Plz Login first...!!',
    { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    history.push('/signin')
  }



  const getUsers = () => {
    axios.get(url + '/admin/customers').then((response) => { //then((response) => setUsers(response.data.result))
      const res = response.data
      if (res.status === 'OK') {
        // console.log(res+"AAYAA yaha takk sucess fully")
        setUsers(res.result)
      } else {
        toast.error('Please Login First',
          { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
      }
    })
  }
  useEffect(() => {
    console.log(`Users component got loaded`)
    getUsers()
  }, []);

  const deleteUser = (user) => {
    // send the data to the API
    console.log(user)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        axios.delete(url + '/admin/customer/' + user.email).then((response) => {
          const result = response.data
          if (result.status === 'OK') {
            // Swal.fire({
            //   // position: 'top-end',
            //   icon: 'success',
            //   title: 'User Deleted Successfully',
            //   showConfirmButton: false,
            //   timer: 800
            // })
            toast.success('User Deleted Succesfully',
              { autoClose: 1500, position: toast.POSITION.BOTTOM_LEFT })
            getUsers()

          } else {
            Swal.fire({
              icon: 'error',
              
              title: 'Oops...',
              text: 'Something went wrong!',
              text: 'Error Deleting User',
              //       })
              //     }
              //   })
              // }
            })

          }
        })
      }
    })//------------------------


  }

  return (
    <div>
      <h1 className="page-title">Users</h1>
      <div>
        <table className="table table-striped">
          <thead style={{ background: "#343a40", color: "white" }}>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>MobileNo</th>
              <th>Locality</th>
              <th>City</th>
              <th>State</th>
              <th>Pincode</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {/* {users.map((user)=>{
            return <UserRow user={user}/>
          })}       */}
            {

              users.length >= 1 ? users.map(user => {

                return <tr key={user.id}>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.email}</td>
                  <td>{user.umob}</td>
                  <td>{user.address.ulocality}</td>
                  <td>{user.address.ucity}</td>
                  <td>{user.address.ustate}</td>
                  <td>{user.address.upin}</td>
                  <td>
                    <button type="button" class="btn btn-danger"
                      onClick={() => {
                        deleteUser(user)
                      }}>
                      Delete
                    </button>
                  </td>
                </tr>
              }) : ''

            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users
