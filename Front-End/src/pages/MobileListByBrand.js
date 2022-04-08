import { useLocation  } from 'react-router'
import { url } from '../common/constants'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import  '../components/HorizontalSlider.css'

const MobileListByBrand=()=>{
    const location = useLocation()
    const mobiles = location.state.mobiles
    console.log(mobiles)
const history=useHistory()

const onmobileselect =(mobile)=>{
   console.log(mobile)
   console.log(mobile.id)
   history.push('/specs',{mobile:mobile})
    // axios.get(url + '/specs/' + mobile.id ).then((response) => {
    //     const res = response.data
    //     if (res.status === 'OK') {
    //      console.log(res.result)
    //       history.push('/specs' , {specs: res.result , mobilename: mobile.mname , mobileimage:mobile.mthumb})
        
    //     } else {
    //       alert('error occured while getting all albums')
    //     }
    //   })
}

    return(
       
    <div className="slider-container" >
    <div className="title"> Mobiles of - {location.state.bname}</div>

{
    mobiles.map((mobile) => 
    {
  return (
      <div className="item-container" onClick={()=>{
          onmobileselect(mobile)

      }}>
          <img src={'/images/'+mobile.mobImage} className="image" alt= " " />
            <div className="item-title">{mobile.mname}({mobile.mcolor})</div>
            <div className="item-title">{mobile.mprice}/-</div>
          </div>   
  )
 })}

 </div>

    )
       
}

export default MobileListByBrand