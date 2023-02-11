import { useParams } from "react-router-dom"

const Division = () => {

    const {division} = useParams()
    console.log(division)
    return (
        <div>
            <div>
                <h1>North</h1>
            </div>
        <div>
            <h1>South</h1>
        </div>
        <div>
            <h1>West</h1>
        </div>
        <div>
            <h1>East</h1>
        </div>
    </div>
    )
}

export default Division