import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Pokemons from './views/Pokemons'
import InfoPoke from './views/InfoPoke'

function App(){

  return(
    <>
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/pokemons' element = {<Pokemons />} />
        <Route path='/pokemons/:name' element = {<InfoPoke />} />
      </Routes>
        </>
  )
}

export default App