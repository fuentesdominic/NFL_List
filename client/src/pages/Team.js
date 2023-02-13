import { useParams } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Team = ({allTeams, allPlayers}) => {

    const {team} = useParams()

    const players = allPlayers.filter(player => player.team === team)
    const teams = allTeams.filter(player => player.team === team)

    const addPlayers = {
        name: '',
        age: '',
        position: ''
    }

    const [createPlayers, setCreatePlayers] = useState(addPlayers)

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        await axios.post('/teams/players', createPlayers)
        setCreatePlayers(addPlayers)
        allPlayers()
    }

    const handleChange = (evt) => {
        setCreatePlayers({...createPlayers, [evt.target.id]: evt.target.value})
    }

    return (
        <div>
            <h2>{team}</h2>
            {teams.map((team) => (
                <div key={team._id}>
                    <img src={team.logo} alt=''></img>
                    <h3>{team.location}</h3>
                    <h3>{team.stadium}</h3>
                    <h3>{team.capacity}</h3>
                </div>
            ))}
            {players.map((player) => (
                <div key={player._id}>
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
                    value={createPlayers.name}></textarea>
                <label htmlFor="age">Age:</label>
                <textarea
                    id="age"
                    cols='2'
                    rows='1'
                    onChange={handleChange}
                    value={createPlayers.age}></textarea>
                <label htmlFor="position">Position</label>
                <select id="position" onChange={handleChange} value={createPlayers.position}>
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
// .fitler in order to grab each player.
export default Team