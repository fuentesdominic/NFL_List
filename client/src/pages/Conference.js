import { useParams, Link } from "react-router-dom"
// navigating from teams inside a single conference to bringing you into a page for a single team
const Conference = ({allTeams}) => {

    const {division} = useParams()
    const {conference} = useParams()

    const teams = allTeams.filter(team => division.toLowerCase() === team.division.toLowerCase() && conference.toLowerCase() === team.conference.toLowerCase())

    return (
        <div>
            <div>
            <h2 className="conferenceSelect">Select A Team:</h2>
            </div>
        <div className="conferenceLogo">
            {teams.map((team) => (
            <div className="conferenceLogoMap" key={team._id}>
                <Link to={`/teams/${team.team}`}>
                    <img className="teamlogo" src={team.logo} alt=''></img>
                </Link>
            </div>
            ))}
            </div>
        </div>
    )
}

export default Conference