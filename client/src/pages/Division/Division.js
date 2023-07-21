import { useParams, Link } from "react-router-dom"
import './Division.css'
// navigating to each conference from nfc or afc(home page). 
const Division = () => {

    const {division} = useParams()
    return (
        <div className="division-page">
            <h2 className="divisionTitle">Select A Conference:</h2>
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
        <div className="image-container">
            <img className="image" src="https://www.usatoday.com/gcdn/presto/2022/09/07/USAT/532e129b-ea86-4bce-ba3c-884841f701f9-mostsearchedNFL_v1_promo.jpg?crop=7014,3945,x497,y449&width=3200&height=1800&format=pjpg&auto=webp" alt=""></img>
        </div>
    </div>
    )
}

export default Division