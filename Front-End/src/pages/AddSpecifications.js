import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'
import { useLocation } from 'react-router'

import Swal from "sweetalert2";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const AddSpecifications = () => {
  // const [mid, setSid] = useState(0)
  const location = useLocation()
  const mobileId = location.state.mid
  const [ram, setRam] = useState('')
  const [rom, setRom] = useState('')
  const [ssize, setSsize] = useState('')
  const [battery, setBattery] = useState('')
  const [os, setOs] = useState('')
  const [network, setNetwork] = useState('')
  const [sim, setSim] = useState('')
  const [rcam, setRcam] = useState('')
  const [fcam, setFcam] = useState('')
  const [dim, setDim] = useState('')

  // get the history object
  const history = useHistory()

  const addSpecifications = () => {
    // if (mid.length === -1) {
    //     alert('select specification id')
    // } else 
    if (ram.length === 0) {
      toast.error('Enter RAM ..!!',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (rom.length === 0) {
      toast.error('Enter ROM ..!!',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (ssize.length === 0) {
      toast.error('Enter Screen Size...!!',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (battery.length === 0) {
      toast.error('Enter Battery ...!!',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (os.length === 0) {
      toast.error('Enter OS ..!!',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (network.length === 0) {
      toast.error('Enter Network Type...!!',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (sim.length === 0) {
      toast.error('Enter No. of Sim slots...!!',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (rcam.length === 0) {
      toast.error('Enter Rear-Cam pixel..!!',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (fcam.length === 0) {
      toast.error('Enter Front-Cam pixel..!!',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else if (dim.length === 0) {
      toast.error('Enter Mobile Dimensions ..!!',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    } else {
      // when a file needs to be uploaded use FormData
      const data = {
        "mid": mobileId,
        "ram": ram,
        "rom": rom,
        "ssize": ssize,
        "battery": battery,
        "os": os,
        "network": network,
        "sim": sim,
        "rcam": rcam,
        "fcam": fcam,
        "dim": dim
      }
      console.log(data)
      // send the data to the API
      axios.post(url + '/specs/addspecifications', data).then((response) => {
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
            title: 'Specifications Added Successfully'
          })

          // go to the list of specifications
          history.push('/specs')
        } else {
          toast.error('Something went wrong ..!!',
            { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
        }
      })
    }
  }

  return (
    <div>
      <h1 className="page-title">Add Specifications</h1>
      <div className="col-md-6">
        <label htmlFor="">Mobile Id</label>
        <input
          // onChange={(e) => {
          //   setSid(e.target.value)
          // }}
          type="text"
          className="form-control"
          value={mobileId}
        />

      </div>
      <div className="col-md-6">
        <label htmlFor="">RAM</label>

        <select className="form-select" onChange={(e) => {
          setRam(e.target.value)
        }}>
          <option disabled selected hidden>Select from Below options</option>
          <option value="4GB">4 GB</option>
          <option value="8GB">8 GB</option>
          <option value="12GB">12 GB</option>
          <option value="16GB">16 GB</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="">ROM</label>

        <select className="form-select" aria-label="Default select example" onChange={(e) => {
          setRom(e.target.value)
        }}>
          <option disabled selected hidden>Select from Below options</option>
          <option value="32GB">32 GB</option>
          <option value="64GB">64 GB</option>
          <option value="128GB">128 GB</option>
          <option value="256GB">256 GB</option>
          <option value="512GB">512 GB</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="">Screen Size</label>

        <select className="form-select" aria-label="Default select example" onChange={(e) => {
          setSsize(e.target.value)
        }}>
          <option disabled selected hidden>Select from Below options</option>
          <option value="5 inch">5 inch</option>
          <option value="5.2 inch">5.2 inch</option>
          <option value="6 inch">6 inch</option>
          <option value="6.2 inch">6.2 inch</option>
          <option value="6.5 inch">6.5 inch</option>
          <option value="7 inch">7 inch</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="">Battery</label>

        <select className="form-select" aria-label="Default select example" onChange={(e) => {
          setBattery(e.target.value)
        }}>
          <option disabled selected hidden>Select from Below options</option>
          <option value="4000 mAH">4000 mAH</option>
          <option value="4200 mAH">4200 mAH</option>
          <option value="4500 mAH">4500 mAH</option>
          <option value="5000 mAH">5000 mAH</option>
          <option value="5200 mAH">5200 mAH</option>
          <option value="6000 mAH">6000 mAH</option>

        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="">OS</label>

        <select className="form-select" aria-label="Default select example" onChange={(e) => {
          setOs(e.target.value)
        }}>
          <option disabled selected hidden>Select from Below options</option>
          <option value="Android">Android</option>
          <option value="IOS">IOS</option>

        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="">Network</label>

        <select className="form-select" aria-label="Default select example" onChange={(e) => {
          setNetwork(e.target.value)
        }}>
          <option disabled selected hidden>Select from Below options</option>
          <option value="2G">2G</option>
          <option value="3G">3G</option>
          <option value="4G">4G</option>
          <option value="5G">5G</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="">SIM</label>

        <select className="form-select" aria-label="Default select example" onChange={(e) => {
          setSim(e.target.value)
        }}>
          <option disabled selected hidden>Select from Below options</option>
          <option value="Dual">Dual</option>
          <option value="Single">Single</option>

        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="">Rcam</label>

        <select className="form-select" aria-label="Default select example" onChange={(e) => {
          setRcam(e.target.value)
        }}>
          <option disabled selected hidden>Select from Below options</option>
          <option value="8 MP">8 MP</option>
          <option value="13 MP">13 MP</option>
          <option value="16 MP">16 MP</option>
          <option value="48 MP">48 MP</option>
          <option value="64 MP">64 MP</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="">Fcam</label>

        <select className="form-select" aria-label="Default select example" onChange={(e) => {
          setFcam(e.target.value)
        }}>
          <option disabled selected hidden>Select from Below options</option>
          <option value="8 MP">8 MP</option>
          <option value="13 MP">13 MP</option>
          <option value="16 MP">16 MP</option>
          <option value="48 MP">48 MP</option>
          <option value="64 MP">64 MP</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="">Dimensions</label>

        <select className="form-select" aria-label="Default select example" onChange={(e) => {
          setDim(e.target.value)
        }}>
          <option disabled selected hidden>Select from Below options</option>
          <option value="828 x 1792">828 x 1792</option>
          <option value="750 x 1334">750 x 1334</option>
          <option value="640 x 1136">640 x 1136</option>
          <option value="640 x 1136">640 x 1136</option>
          <option value="768 x 1024">768 x 1024</option>
          <option value="1080 x 1920">1080 x 1920</option>
          <option value="1440 x 869">1440 x 869</option>
        </select>
      </div>
      <div className="mb-3">
        <button onClick={addSpecifications} className="btn btn-success">
          Add
        </button>

        <Link to="/specs">
          <a className="btn btn-warning" href=" ">Cancle</a>
        </Link>
      </div>
    </div>
  )
}

export default AddSpecifications
