import React from 'react'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/Navbar/NavBar'
import './App.css';
import RowPost from './Components/RowPost/RowPost';
import {originals,action} from './urls/urls';

function App() {
  return (
    <div className="App">

      <NavBar/>
      <Banner />
      <RowPost url={originals} title='Netflix originals'/>
      <RowPost url={action} title='Action Movies' isSmall />

    </div>
  )
}

export default App    