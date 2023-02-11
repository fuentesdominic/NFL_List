import { useParams } from "react-router-dom"

const Team = ({allTeams, allPlayers}) => {

    const {team} = useParams()

    const players = allPlayers.filter(player => player.team === team)
    console.log(players)

    return (
        <div>
            <h1>{team}</h1>
            {players.map((player) => (
                <div key={player._id}>
                    <h3>{player.name}</h3>
                </div>
            ))}
        </div>
    )
}
// .fitler in order to grab each player.
export default Team