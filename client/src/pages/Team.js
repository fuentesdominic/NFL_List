import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const Team = ({allTeams, allPlayers, getAllPlayers}) => {

    const {team} = useParams()

    const players = allPlayers.filter(player => player.team === team)
    const teams = allTeams.filter(player => player.team === team)

    const addPlayer = {
        name: '',
        age: '',
        position: '',
        team: `${team}`
    }

    const [createPlayer, setCreatePlayer] = useState(addPlayer)
    const [currentPlayers, setCurrentPlayers] = useState()

    const getAtPlayers = async () => {
        try {
          let res = await axios.get('http://localhost:3001/api/teams/players')
          setCurrentPlayers(res.data.players)
        } catch (err) {
          console.log(err)
        }
      }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        await axios.post('http://localhost:3001/api/teams/players', createPlayer)
        setCreatePlayer(addPlayer)
        getAllPlayers()
    }

    const handleChange = (evt) => {
        setCreatePlayer({...createPlayer, [evt.target.id]: evt.target.value})
    }

      useEffect(() => {
        getAtPlayers()
      }, [allPlayers])

    

    return (
        <div>
            <h2>{team}</h2>
            {teams.map((team) => (
                <div key={team._id}>
                    <img src={team.logo} alt=''></img>
                    <h4>Stadium Location:</h4>
                    <h3>{team.location}</h3>
                    <h4>Stadium Name:</h4>
                    <h3>{team.stadium}</h3>
                    <h4>Seats:</h4>
                    <h3>{team.capacity}</h3>
                </div>
            ))}
            {players.map((player) => (
                <div key={player._id}>
                    <h3>Players:</h3>
                    <h4>{player.name}</h4>
                    <p>{player.age}</p>
                    <p>{player.position}</p>
                </div>
            ))}
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
                <textarea
                    id="name"
                    cols='30'
                    rows='1'
                    onChange={handleChange}
                    value={createPlayer.name}></textarea>
                <label htmlFor="age">Age:</label>
                <textarea
                    id="age"
                    cols='2'
                    rows='1'
                    onChange={handleChange}
                    value={createPlayer.age}></textarea>
                <label htmlFor="position">Position:</label>
                <select id="position" onChange={handleChange} value={createPlayer.position}>
                    <option value='quarterback'>Quarterback</option>
                    <option value='offensive linemen'>Offensive Linemen</option>
                    <option value='running back'>Running Back</option>
                    <option value='tight end'>Tight End</option>
                    <option value='wide receiver'>Wide Receiver</option>
                    <option value='defensive linemen'>Defensive Linemen</option>
                    <option value='linebacker'>Linebacker</option>
                    <option value='cornerback'>Cornerback</option>
                    <option value='safety'>Safety</option>
                </select>
                <button type='submit'>Add Player</button>
            </form>
        </div>
        
    )
}
export default Team