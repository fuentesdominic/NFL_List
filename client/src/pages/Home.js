import { Link } from 'react-router-dom'
import '../App.css'

const Home = () => {
    return (
        <div>
            <h1>Select A Division:</h1>
            <h2>NFC</h2>
            <Link to={"/division/nfc"}>
            <div>
                <img className='homenfc' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/National_Football_Conference_logo.svg/1200px-National_Football_Conference_logo.svg.png' alt=''></img>
            </div>
            </Link>
            <div>
            <h2>AFC</h2>
            <Link to={"/division/afc"}>
                <img className='homeafc' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/American_Football_Conference_logo.svg/1200px-American_Football_Conference_logo.svg.png' alt=''></img>
            </Link>
            </div>
            
        </div>
    )
}

export default Home