
import { useState } from 'react'
// import {Link } from 'reat'

import { IoReorderThreeOutline } from "react-icons/io5";
import './nav.css'


const Navigaton = () => {
    const  navItems  = ['BLOGS', 'ABOUT', 'LINKS', 'PROJECT' ]
    const [isOpen, setIsOpen] = useState(false)

   const handleMenu = () => {
      setIsOpen(!isOpen)
      console.log(isOpen)
    }
  return (
    <div className='pageNav'> 
        
        <h1 className='logo'>NORDIC ROSE</h1>
       
      {
        isOpen ? 
        <nav className="screenItems"> 
        {navItems.map((item) => (
            <a key={item} href="#" className="item">{item}</a>
        ))} 
        <button className="closeBtn" onClick={handleMenu}>
          x
        </button>
        </nav> : null
      }
    <nav className="items hidden"> 
        {navItems.map((item, index) => (
            <a key={index} href="#" className="item">{item}</a>
        ))}
    </nav>
    <button className='smallScreen' >
            <IoReorderThreeOutline style={{width:'100%', height:'100%'}} onClick={handleMenu} />
        </button>
    </div>
  )
}

export default Navigaton