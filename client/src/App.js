import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home/Home'
import Division from './pages/Division/Division'
import Conference from './pages/Conference/Conference'
import Team from './pages/Team/Team'
import Header from './components/header/Header';
import CreatePlayer from './components/create/CreatePlayer';

function App(props) {
  const [allTeams, setAllTeams] = useState([])
  const [allPlayers, setAllPLayers] = useState([])

  const getAllTeams = async () => {
    try {
      let res = await axios.get('/api/teams')
      setAllTeams(res.data.teams)
    } catch (err) {
      console.log(err)
    }
  }

  const getAllPlayers = async () => {
    try {
      let res = await axios.get('/api/teams/players')
      setAllPLayers(res.data.players)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllPlayers()
    getAllTeams()
  }, [props])

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/create/:team' element={<CreatePlayer allTeams={allTeams} />} />
          <Route path="/division/:division" element={<Division />} />
          <Route path="/conference/:division/:conference" element={<Conference allTeams={allTeams}/>} />
          <Route path="/teams/:team" element={<Team allTeams={allTeams} allPlayers={allPlayers} getAllPlayers={getAllPlayers} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
