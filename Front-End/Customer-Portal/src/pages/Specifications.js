import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../common/constants'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Specifications = () => {
  // maintain the state
  const [specifications, setSpecifications] = useState([])
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
    console.log(`Specifications component got loaded`)
    getSpecifications()
  }, [])

  const getSpecifications = () => {
    axios.get(url + '/specs').then((response) => {
      const res = response.data
      if (res.status === 'OK') {
        setSpecifications(res.result)
      } else {
      
        toast.error('Something went wrong...!!',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
      }
    })
  }

  return (
    <div>
      <h1 className="page-title">Specifications</h1>

      {/* <Link to="/addspecifications">
        <a className="btn btn-success" href=" ">Add Specifications</a>
      </Link> */}

      <table className="table table-striped">
        <thead style={{ background: "#343a40", color: "white" }}>
          <tr>
            <th>Id</th>
            <th>Ram</th>
            <th>Rom</th>
            <th>Scr_Size</th>
            <th>Battery</th>
            <th>OS</th>
            <th>Network</th>
            <th>Sim</th>
            <th>Rear_Cam</th>
            <th>Front_Cam</th>
            <th>Dimensions</th>
          </tr>
        </thead>
        <tbody>

          {
            specifications.length >= 1 ? specifications.map(specs => {

              return <tr key={specs.id}>
                <td>{specs.id}</td>
                <td>{specs.ram}</td>
                <td>{specs.rom}</td>
                <td>{specs.ssize}</td>
                <td>{specs.battery}</td>
                <td>{specs.os}</td>
                <td>{specs.network}</td>
                <td>{specs.sim}</td>
                <td>{specs.rcam}</td>
                <td>{specs.fcam}</td>
                <td>{specs.dim}</td>

                {/* <td>
                      <button type="button" class="btn btn-success" 
                            onClick = {()=>{
                            history.push('/updatebrand',{brand:brand})
                           }}>
                             Update
                       </button>
                     </td> */}
              </tr>
            }) : ''
          }
        </tbody>
      </table>
    </div>
  )
}

export default Specifications
