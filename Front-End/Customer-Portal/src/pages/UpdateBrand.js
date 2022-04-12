import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'
import { useLocation } from 'react-router'
import Home from './Home'

import Swal from "sweetalert2";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const UpdateBrand = () => {
  const [bid, setBid] = useState(0)
  const [bthumb, setBthumb] = useState(undefined)
  const location = useLocation()
  const branddata = location.state.brand
  const history = useHistory()
  // get the history object
  
  console.log(branddata)
  // gets called when user selects an image
  const onFileSelect = (event) => {
    setBthumb(event.target.files[0])
  }

  const updateBrand = () => {
    if (bid.length === -1) {
      toast.error('Enter Brand Id..!!',
      { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (!bthumb) {
      toast.error('Choose Brand Image..!!',
      { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else {
      // when a file needs to be uploaded use FormData
      const data = new FormData()

      // add the data
      data.append('bid', branddata.id)
      data.append('bthumb', bthumb)

      // send the data to the API
      axios.put(url + '/brands/update', data).then((response) => {
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
            title: 'Brand Details Updated Successfully'
          })
          
            //history.push('/signin')  
            history.push('/brands')     
          // go to the list of mobiles
           // history.push('/')
        } else {
          toast.error('Something went wrong..!!',
      { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
        }
      })
    }
  }

  return (
    <div>
      <h1 className="page-title">Update Brand</h1>
      <div className="col-md-6">
        <label htmlFor="">Brand Id</label>
        <input
          type="text"
          className="form-control"
          value={branddata.id}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="">Thumbnail</label>
        <input
          accept="image/*"
          onChange={onFileSelect}
          type="file"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <button onClick={updateBrand} className="btn btn-success">
          Update
        </button>

        <Link to="/brands">
          <a className="btn btn-warning" href=" ">Cancle</a>
        </Link>
      </div>
    </div>
  )
}

export default UpdateBrand
