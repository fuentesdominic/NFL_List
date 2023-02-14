import { useParams, Link } from "react-router-dom"
// navigating to each conference from nfc or afc(home page). 
const Division = () => {

    const {division} = useParams()
    return (
        <div>
            <h2>Select A Conference:</h2>
            <Link to={`/conference/${division}/north`}>
            <div>
                <h1 className="allDivs">North</h1>
            </div>
            </Link>
            <Link to={`/conference/${division}/south`}>
        <div>
            <h1 className="allDivs">South</h1>
            </div>
        </Link>
        <Link to={`/conference/${division}/west`}>
        <div>
            <h1 className="allDivs">West</h1>
        </div>
        </Link>
        <Link to={`/conference/${division}/east`}>
        <div>
            <h1 className="allDivs">East</h1>
        </div>
        </Link>
    </div>
    )
}

export default Division