import { useParams, Link } from "react-router-dom"
import './Division.css'
// navigating to each conference from nfc or afc(home page). 
const Division = () => {

    const {division} = useParams()
    return (
        <div className="division-page">
            <h2 className="divisionSelect">Select A Conference:</h2>
            <Link className="division" to={`/conference/${division}/north`}>
            <div>
                <h1>North</h1>
            </div>
            </Link>
            <Link className="division" to={`/conference/${division}/south`}>
        <div>
            <h1>South</h1>
            </div>
        </Link>
        <Link className="division" to={`/conference/${division}/west`}>
        <div>
            <h1>West</h1>
        </div>
        </Link>
        <Link className="division" to={`/conference/${division}/east`}>
        <div>
            <h1>East</h1>
        </div>
        </Link>
    </div>
    )
}

export default Division