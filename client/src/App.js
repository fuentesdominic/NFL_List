import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

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
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
