import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='home-page'>
            <h1>Select A Division:</h1>
            <div className='div-option'>
            <h2>NFC</h2>
            <Link to={"/division/nfc"}>
                <img className='homeNFC' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/National_Football_Conference_logo.svg/1200px-National_Football_Conference_logo.svg.png' alt=''></img>
            </Link>
            </div>
            <div className='div-option'>
            <h2>AFC</h2>
            <Link to={"/division/afc"}>
                <img className='homeAFC' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/American_Football_Conference_logo.svg/1200px-American_Football_Conference_logo.svg.png' alt=''></img>
            </Link>
            </div>
            
        </div>
    )
}

export default Home