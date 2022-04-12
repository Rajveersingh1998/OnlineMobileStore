import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'
import { useLocation } from 'react-router'

import Swal from "sweetalert2";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const UpdateMobile = () => {
  const [mid, setMid] = useState(0)
  const [mprice, setMprice] = useState(0.0)
  const location = useLocation()
  const mobiledata = location.state.mobile
  console.log(mobiledata)
  // get the history object
  const history = useHistory()
  
  const updateMobile = () => {
    if (mid.length === -1) {
      toast.error('Enter Mobile Id..!!',
      { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (mprice.length === -1) {
      toast.error('Enter Mobile Price..!!',
      { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else {
      // when a file needs to be uploaded use FormData
      const data = {
          
          "mprice":mprice
      }
        setMid(mobiledata.id)
      // send the data to the API
      axios.put(url + '/mobiles/update/'+mobiledata.id, data).then((response) => {
        const result = response.data
        if (result.status === 'OK') {
          
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
            title: 'Mobile Details Updated Successfully'
          })

          // go to the list of mobiles
          history.push('/mobiles')
        } else {
          toast.error('Something went wrong..!!',
      { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
        }
      })
    }
  }

  return (
    <div>
      <h1 className="page-title">Update Mobile</h1>
      <div className="col-md-6">
        <label htmlFor="">Mobile Id</label>
        <input
          type="text"
          className="form-control"
          value={mobiledata.id}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="">Mobile Price</label>
        <input
          onChange={(e) => {
            setMprice(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <button onClick={updateMobile} className="btn btn-success">
          Update
        </button>

        <Link to="/mobiles">
          <a className="btn btn-warning" href=" ">Cancle</a>
        </Link>
      </div>
    </div>
  )
}

export default UpdateMobile
