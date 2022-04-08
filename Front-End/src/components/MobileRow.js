import { url } from '../common/constants'
import './SpecificationRow.css'

const MobileRow = ({ mobile }) => {
console.log(mobile)
  return (
    <tr>
     <td>
      {mobile.bid} 
      </td>
      <td>
        {mobile.imei} 
      </td>
      <td>
        {mobile.mcolor} 
      </td>
      <td>
        {mobile.mdate} 
      </td>
      <td>
        {mobile.mid} 
      </td>
      <td>
        {mobile.mmodel} 
      </td>
      <td>
        {mobile.mname} 
      </td>
      <td>
        {mobile.mprice} 
      </td>
      <td>
      <img
          src={url + '/' + mobile.mthumb}
          alt=""
          className="thumbnail-sm"
        />
      </td>
      <td>
        {mobile.sid} 
      </td>
      <td>
        {mobile.flag} 
      </td>
    </tr>
  )
}
export default MobileRow
