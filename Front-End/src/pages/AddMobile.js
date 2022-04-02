import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'

import Swal from "sweetalert2";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const AddMobile = () => {
  const [mid, setMid] = useState(0)
  const [mmodel, setMmodel] = useState('')
  const [mname, setMname] = useState('')
  const [mcolor, setMcolor] = useState('')
  const [mthumb, setMthumb] = useState(undefined)
  const [imei, setImei] = useState(0)
  const [mdate, setMdate] = useState('')
  const [mprice, setMprice] = useState(0.0)
  const [mbrand, setBrand] = useState('')

  // get the history object
  const history = useHistory()

  // gets called when user selects an image
  const onFileSelect = (event) => {
    setMthumb(event.target.files[0])
  }

  const addMobile = () => {
    if (mid.length === -1) {
      // alert('select mobile id')
      toast.error('Enter mobile id',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (mmodel.length === 0) {
      // alert('select mobile model')
      toast.error('Enter Mobile model',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (mname.length === 0) {
      // alert('select mobile name')
      toast.error('Enter mobile name',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (mcolor.length === 0) {
      // alert('select mobile color')
      toast.error('Enter mobile color',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (!mthumb) {
      // alert('select thumbnail')
      toast.error('Choose a thumbnail',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (imei.length === -1) {
      // alert('select imei no')
      toast.error('Enter IMEI No',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (mdate.length === 0) {
      // alert('select mobile date')
      toast.error('Enter mobile date',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (mprice.length === -1) {
      // alert('select mobile price')
      toast.error('Enter mobile price',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (mbrand.length === 0) {
      // alert('select specific brand')
      toast.error('Enter specific brand',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else {
      // when a file needs to be uploaded use FormData
      const data = new FormData()

      // add the data
      data.append('mid', mid)
      data.append('mmodel', mmodel)
      data.append('mname', mname)
      data.append('mcolor', mcolor)
      data.append('mthumb', mthumb)
      data.append('imei', imei)
      data.append('mdate', mdate)
      data.append('mprice', mprice)
      data.append('mbrand', mbrand) //brand is forign keyyyyy

      // send the data to the API
      axios.post(url + '/mobiles/addMobile', data).then((response) => {
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
            title: 'Mobile Added Successfully'
          })
          //go to add specification of mobile which is added
          history.push('/addspecifications', { mid: mid })
          // go to the list of mobiles
          // history.push('/mobiles')
        } else {
          toast.error('Error Occured in Adding Mobile',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
        }
      })
    }
  }

  return (
    <div>
      <h1 className="page-title">Add Mobile</h1>
      <div className="col-md-6">
        <label htmlFor="">Mobile Id</label>
        <input
          onChange={(e) => {
            setMid(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="">Mobile Model</label>
        <input
          onChange={(e) => {
            setMmodel(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="">Mobile Name</label>
        <input
          onChange={(e) => {
            setMname(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="">Mobile Color</label>
        <input
          onChange={(e) => {
            setMcolor(e.target.value)
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
      <div className="col-md-6">
        <label htmlFor="">Imei No</label>
        <input
          onChange={(e) => {
            setImei(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="">Date</label>
        <input
          onChange={(e) => {
            setMdate(e.target.value)
          }}
          type="date"
          className="form-control"
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
      <div className="col-md-6">
        <label htmlFor="">Brand ID</label>
        <input
          onChange={(e) => {
            setBrand(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <button onClick={addMobile} className="btn btn-success">
          Add
        </button>

        <Link to="/mobiles">
          <a className="btn btn-warning" href=" ">Cancle</a>
        </Link>
      </div>
    </div>
  )
}

export default AddMobile
