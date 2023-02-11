import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import Division from './pages/Division'
import Conference from './pages/Conference'
import Team from './pages/Team'
import Header from './components/Header';

function App() {
  const [allTeams, setAllTeams] = useState([])
  const [allPlayers, setAllPLayers] = useState([])

  const getAllTeams = async () => {
    try {
      let res = await axios.get('http://localhost:3001/api/teams')
      setAllTeams(res.data.teams)
    } catch (err) {
      console.log(err)
    }
  }

  const getAllPlayers = async () => {
    try {
      let res = await axios.get('http://localhost:3001/api/teams/players')
      console.log(res)
      setAllPLayers(res.data.players)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllPlayers()
    getAllTeams()
  }, [])

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/division/:name" element={<Division />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/team" element={<Team />} allTeams={allTeams} allPlayers={allPlayers}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
