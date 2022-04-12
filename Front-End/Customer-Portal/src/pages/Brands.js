import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../common/constants'
import HorizontalSliderBrand from '../components/HorizontalSliderBrand'
import { useHistory } from 'react-router-dom'

import Swal from "sweetalert2";
// import { ToastContainer, toast } from 'react-toastify';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


const Brands = () => {
  const [allBrands, setAllBrands] = useState([])
  
  const history = useHistory()

  useEffect(() => {
    getAllBrands()
  }, [])
 
//   $('img').mouseenter(function() {
//     $(this).css("cursor","pointer");
//     $(this).animate({width: "50%", height: "50%"}, 'slow');
// });

// $('img').mouseleave(function() {   
//     $(this).animate({width: "28%"}, 'slow');
// });


  const getAllBrands = () => {
    // rest API
   // const url = 'http://localhost:4000'

    // send the GET request
    axios.get(url + '/brands/allBrands').then((response) => {
      const res = response.data
      console.log(res);
      if (res.status === 'OK') {
        setAllBrands(res.result)
      } else {
        toast.error('Something went wrong ...🤔',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
      }
    })
  }

  const getAllMobilesOfSelectedBrand = (brand) => {
    // send the GET request
    console.log(brand)
    axios.get(url + '/brands/mobiles/' + brand.id).then((response) => {
      const res = response.data
      console.log(res.result);
      console.log(brand.bname);
     // console.log(brand.bthumb);
     // console.log(url + '/brands/mobile/' + brand.bid)
      if (res.status === 'OK') {
        if(res.result == 0){         
          history.push('/notavailiable')
        }else{
        history.push('/mobile-list', {
          mobiles: res.result,
          bname: brand.bname,
        })
        }
      } else {
        toast.error('Something went wrong ...🤔',
        { autoClose: 1000, position: toast.POSITION.BOTTOM_LEFT })
      }
    })
    }

  return (
    <div id='image'>
      <h2 className="page-title">Brands</h2>
      <HorizontalSliderBrand
        onItemSelect={getAllMobilesOfSelectedBrand}
        items={allBrands}
        // title="Brands"
      />
    </div>
  )
}

export default Brands

