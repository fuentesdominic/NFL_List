import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
        <nav>
            <Link to='/'>Home</Link>
        </nav>
      </header>
    </div>
  )
}
export default Header