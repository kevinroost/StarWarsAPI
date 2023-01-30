
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Starships from './pages/Starships';
import Starship from './pages/Starship';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/starship' element={<Starship />} />
        <Route path='/starships' element={<Starships />} />
      </Routes>
    </>
  );
}

export default App;
