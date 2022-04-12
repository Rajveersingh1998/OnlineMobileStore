import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Mobiles = () => {
  // maintain the state
  const [mobiles, setMobiles] = useState([])
  const isSignin = useSelector((state) => state.isSignin);
  const history = useHistory();

  if (isSignin.status === false) {
    toast.error('Plz Login first...!!',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
    history.push('/signin')
  }


  // do something automatically
  // []:
  // - accepts a variable and keeps watching the change
  // - when the variable state changes, the function (1st param) gets called
  // - keep the second param empty to execute something when the component gets loaded
  useEffect(() => {
    console.log(`Mobiles component got loaded`)
    getMobiles()
  }, [])

  const getMobiles = () => {
    axios.get(url + '/mobiles').then((response) => {
      const res = response.data
      if (res.status === 'OK') {
        setMobiles(res.result)
      } else {
        // alert('error while loading list of mobiles')
        toast.error('Error while loading list of mobiles',
          { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
      }
    })
  }

  const deleteMobile = (mobile) => {
    console.log(mobile.id)

    axios.delete(url + '/mobiles/' + mobile.id).then((response) => {
      const res = response.data
      if (res.status === 'OK') {
        // alert("sucessfully deleted")
        toast.success(' Mobile Deleted sucessfully',
          { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
        getMobiles()
      } else {
        // alert("error while deleting mobile")
        toast.error('Error while deleting mobile',
          { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
      }

    })

  }

  return (
    <div>
      <h1 className="page-title">Mobiles</h1>

      <Link to="/addmobile">
        <a className="btn btn-success" href=" ">Add Mobile</a>
      </Link>

      <br /><br />
      <div className='container-fluid'>

        <table className="table">
          <thead style={{ background: "#343a40", color: "white" }}>
            <tr>
              <th>ID</th>
              <th>Model</th>
              <th>Name</th>
              <th>Color</th>
              <th>ThumbNail</th>
              <th>IMEI</th>
              <th>Mfg_Date</th>
              <th>Price</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>

            {
              mobiles.length >= 1 ? mobiles.map(mobile => {

                return <tr key={mobile.id}>
                  <td>{mobile.id}</td>
                  <td>{mobile.mmodel}</td>
                  <td>{mobile.mname}</td>
                  <td>{mobile.mcolor}</td>
                  <td><img src={'/images/' + mobile.mobImage} alt=""
                    className="thumbnail" style={{ width: "150px", height: "90px" }} /></td>
                  <td>{mobile.imei}</td>
                  <td>{mobile.mdate}</td>
                  <td>{mobile.mprice}</td>
                  <td>
                    <button type="button" class="btn btn-success"
                      onClick={() => {
                        history.push('/updatemobile', { mobile: mobile })
                      }}>
                      Update
                    </button>
                    <button type="button" class="btn btn-danger"
                      onClick={() => {
                        deleteMobile(mobile)
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
  )
}

export default Mobiles
