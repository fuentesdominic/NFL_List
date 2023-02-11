import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home';
import Division from './components/Division';
import Conference from './components/Conference';
import Team from './components/Team';

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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/division" element={<Division />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/team" element={<Team />} allTeams={allTeams} allPlayers={allPlayers}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
