import axios from 'axios'
import { useState, useEffect } from 'react'
import { url } from '../common/constants'
import HorizontalSlider from '../components/HorizontalSlider'
import { useHistory } from 'react-router-dom'

// import FacultyInfoCard from "./FacultyInfoCard";
import Footer from "./Footer";


const Home = () => {
  const [bestSelling, setBestSelling] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [trending, setTrending] = useState([])

  const history = useHistory()

  useEffect(() => {
    getBestSelling()
    getUpcoming()
    getTrending()
  }, [])


  const getBestSelling = () => {

    // send the GET request
    axios.get(url + '/mobiles/bestsale').then((response) => {
      const res = response.data
      if (res.status === 'OK') {
        setBestSelling(res.result)
      } else {
        alert('error occured while getting best-selling mobiles')
      }
    })
  }

  const getUpcoming = () => {

    // send the GET request
    axios.get(url + '/mobiles/upcoming').then((response) => {
      const res = response.data
      if (res.status === 'OK') {
        setUpcoming(res.result)
      } else {
        alert('error occured while getting upcoming mobiles')
      }
    })
  }

  const getTrending = () => {
    // send the GET request
    axios.get(url + '/mobiles/trending').then((response) => {
      const res = response.data
      if (res.status === 'OK') {
        setTrending(res.result)
      } else {
        alert('error occured while getting trending mobiles')
      }
    })
  }

  const getSpecificationsOfSelectedMobile = (mobile) => {
    // send the GET request
    console.log(mobile)
    history.push('/specs', { mobile: mobile })
  }

  return (
    <div >
      <div>
        <HorizontalSlider
          onItemSelect={getSpecificationsOfSelectedMobile}
          items={bestSelling}
          title="Best Selling"
        />
        <HorizontalSlider
          onItemSelect={getSpecificationsOfSelectedMobile}
          items={upcoming}
          title="Upcoming Sales"
        />
        <HorizontalSlider
          onItemSelect={getSpecificationsOfSelectedMobile}
          items={trending}
          title="Trending Now"
        />
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <Footer />
        </div>
      </div>
    </div>

  )
}

export default Home

