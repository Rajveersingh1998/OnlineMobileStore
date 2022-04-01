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

const Brands = () => {
  // maintain the state
  const [brands, setBrands] = useState([])
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
    console.log(`Brands component got loaded`)
    getBrands()
  }, [])

  const getBrands = () => {
    axios.get(url + '/brands/allBrands').then((response) => {
      const res = response.data
      if (res.status === 'OK') {
        setBrands(res.result)
      } else {
        // alert('error while loading list of brands')
        toast.error('Error while loading list of brands',
          { autoClose: 1000, position: toast.POSITION.BOTTOM_RIGHT })
      }
    })
  }

  return (
    <div>
      <h1 className="page-title">Brands</h1>

      <Link to="/addbrand">
        <a className="btn btn-success" href=" ">Add Brand</a>
      </Link>
      <br /><br />
      <table className="table table-striped">
        <thead style={{ background: "#343a40", color: "white" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>ThumbNail</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>

          {
            brands.length >= 1 ? brands.map(brand => {

              return <tr key={brand.id}>
                <td>{brand.id}</td>
                <td>{brand.bname}</td>
                <td><img src={'/images/' + brand.brandImage} alt=""
                  className="thumbnail" style={{ width: "100px", height: "75px" }} /></td>
                <td>
                  <button type="button" class="btn btn-success"
                    onClick={() => {
                      history.push('/updatebrand', { brand: brand })
                    }}>
                    Update
                  </button>
                </td>
              </tr>
            }) : ''
          }
        </tbody>
      </table>
    </div>
  )
}

export default Brands
