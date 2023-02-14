import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <header>
        <nav>
            <Link className='homelink' to='/'>Home</Link>
        </nav>
      </header>
    </div>
  )
}
export default Header