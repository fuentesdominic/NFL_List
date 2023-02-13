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
        await axios
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
        </div>

    )
}
// .fitler in order to grab each player.
export default Team