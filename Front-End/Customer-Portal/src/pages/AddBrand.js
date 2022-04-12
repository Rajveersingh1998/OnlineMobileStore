import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'
import { ImFolderUpload } from 'react-bootstrap-icons';

import Swal from "sweetalert2";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const AddBrand = () => {
  // const [bid, setBid] = useState(0)
  const [bname, setBname] = useState('')
  const [bthumb, setBthumb] = useState(undefined)
  //const [brandImgName, setBIN] = useState('')

  // get the history object
  const history = useHistory()

  // gets called when user selects an image
  const onFileSelect = (event) => {
    setBthumb(event.target.files[0])
  }

  // const upload = () =>{
  //   const data = new FormData()
  //   data.append('BrandImg' , bthumb)
  //   console.log(data)
  //   axios.post(url+'/image/upload',data).then((response)=>{
  //          alert("img uploaded sucessfully")
  //         setBIN(response)          
  //   })
  // }

  const addBrand = () => {
    // if (bid.length === -1) {
    //     alert('select brand id')
    // } else 
    if (bname.length === 0) {
      toast.error('Plz Enter Brand Name',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (!bthumb) {
      toast.error('Plz Choose Brand Image',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else {
      // when a file needs to be uploaded use FormData
      const data = new FormData()

      // add the data
      // data.append('bid', bid)
      data.append('bname', bname)
      data.append('brandImg', bthumb)

      // send the data to the API
      axios.post(url + '/brands/addbrand', data).then((response) => {
        const result = response.data

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
          title: 'Brand Added Successfully'
        })
        history.push("/brands")
        // if (result.status === 'success') {
        //   alert('successfully added brand')

        //   // go to the list of mobiles
        //   history.push('/brands')
        // } else {
        //   alert('error while adding brand')
        // }
      })
    }
  }

  return (
    <div>
      <h1 className="page-title">Add Brand</h1>
      {/* <div className="col-md-6">
        <label htmlFor="">Brand Id</label>
        <input
          onChange={(e) => {
            setBid(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div> */}
      <div className="col-md-6">
        <label htmlFor="">Brand Name</label>
        <input
          onChange={(e) => {
            setBname(e.target.value)
          }}
          type="text"
          className="form-control"
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
        <button onClick={addBrand} className="btn btn-success">
          Add
        </button>

        <Link to="/brands">
          <a className="btn btn-warning" href=" ">Cancle</a>
        </Link>
      </div>
    </div>
  )
}

export default AddBrand
