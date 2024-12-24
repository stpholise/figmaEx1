import { Link } from 'react-router-dom'
 import Navigation from './Navigation'
 import Logo from '../assets/A__1_-removebg-preview.png'
 import '../styles/Header.css'

const Header = () => {
  return (
    <header className='header'> 
        <Link to={'/'} className="logoContainer" aria-label='logo'>
            <img src={Logo} alt="" />
        </Link>
        <Navigation /> 
    </header>
  )
}

export default Header