import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getStarships } from '../services/sw-api'

const Starships = () => {
  const [starshipList, setStarshipList] = useState([])
  
  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <section id="starship-list">
      {starshipList.map((ship, idx) =>
          <Link 
            key={idx}
            to="/starship" 
            state={{ship}}
            className="starship-card"
          >
            {ship.name}
          </Link>
        // <div key={idx} className="starship-card">
          /* <Starship starship={ship} /> */
        // </div>
      )}
    </section>
  )
}

export default Starships