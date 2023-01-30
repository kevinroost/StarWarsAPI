import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { getDetails } from '../services/sw-api.js'

const Starship = (props) => {
  const [shipDetails, setShipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const shipData = await getDetails(location.state.ship.url)
      setShipDetails(shipData)
    }
    fetchDetails()
  }, [location.state])
  console.log(shipDetails);

  return(
    <>
      {shipDetails.name
      ? 
        <div className='starship-card'>
          <h3>Ship Details</h3>
          <p>{shipDetails.name}</p>
          <p>{shipDetails.model}</p>
          <Link to='/starships'>Return to Starships</Link>
        </div>
      :
      <h3>Loading Details...</h3>
      }
    </>
  )
}

export default Starship