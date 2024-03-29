import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <header>
        <nav>
            <Link className='homeLink' to='/'>Home</Link>
            <img className='imgLogo' src='https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg' alt=''></img>
        </nav>
      </header>
    </div>
  )
}
export default Header