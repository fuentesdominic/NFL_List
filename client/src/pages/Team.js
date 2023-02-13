import { useParams } from "react-router-dom"

const Team = ({allTeams, allPlayers}) => {

    const {team} = useParams()

    const players = allPlayers.filter(player => player.team === team)
    const teams = allTeams.filter(player => player.team === team)
    return (
        <div>
            <h2>{team}</h2>
            {teams.map((team) => (
                <div key={team._id}>
                    <img src={team.logo} alt=''></img>
                    <h3>{team.location}</h3>
                    <h3>{team.stadium}</h3>
                    <h4>{team.capacity}</h4>
                </div>
            ))}
            {players.map((player) => (
                <div key={player._id}>
                    <h5>{player.name}</h5>
                    <p>{player.age}</p>
                    <p>{player.position}</p>
                </div>
            ))}
        </div>
    )
}
// .fitler in order to grab each player.
export default Team