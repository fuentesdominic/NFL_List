import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to={"/division/nfc"}>
            <div>
                <h1>NFC</h1>
            </div>
            </Link>
            <div>
            <Link to={"/division/afc"}>
                <h1>AFC</h1>
            </Link>
            </div>
            
        </div>
    )
}

export default Home