import { Link } from 'react-router-dom'
 import Navigation from './Navigation'
 import Logo from '../assets/A__1_-removebg-preview.png'
 import '../styles/Header.css'
 import { useState } from 'react'
 import HamburgerIcon from '/icons/hamburger.svg'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='header'> 
        <Link to={'/'} className="logoContainer" aria-label='logo'>
            <img src={Logo} alt="" />
        </Link>
        {
          showMenu && <div className="overlay"  onClick={() => setShowMenu(false)}> </div>
        }
        <Navigation showMenu={showMenu} setShowMenu={setShowMenu} />
        
        <button aria-label='menu' className='hamburgerBtn' onClick={() => setShowMenu(!showMenu)}>
          <img src={HamburgerIcon} className='hamburgerIcon' alt="" />
        </button>
    </header>
  )
}

export default Header