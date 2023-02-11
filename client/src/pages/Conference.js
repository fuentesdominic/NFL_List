import { useParams, Link } from "react-router-dom"
// navigating from teams inside a single conference to bringing you into a page for a single team
const Conference = () => {

    const {division} = useParams()
    const {conference} = useParams()
    console.log(division, conference)
    return (
        <div>
            <h1>Conference</h1>
        </div>
    )
}

export default Conference