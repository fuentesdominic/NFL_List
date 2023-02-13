import { useParams, Link } from "react-router-dom"
// navigating from teams inside a single conference to bringing you into a page for a single team
const Conference = ({allTeams}) => {

    const {division} = useParams()
    const {conference} = useParams()
    console.log(division, conference)

    const teams = allTeams.filter(team => division.toLowerCase() === team.division.toLowerCase() && conference.toLowerCase() === team.conference.toLowerCase())
    console.log(teams)
// .map to find each teams image

    return (
        <div>
            <h2>Select A Team:</h2>
          {teams.map((team) => (
            <div key={team._id}>
                <Link to={`/${team.team}`}>
                    <img src={team.logo} alt=''></img>
                </Link>
            </div>
          ))}
        </div>
    )
}

export default Conference