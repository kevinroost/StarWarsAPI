import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className="App-header">
      <h1>Star Wars Starships</h1>
      <Link to='/starships' >All Starships</Link>
    </header>
  )
}

export default Nav