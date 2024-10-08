
import './nav.css'


const Navigaton = () => {
    const  navItems  = ['BLOGS', 'ABOUT', 'LINKS', 'PROJECT' ]
  return (
    <div className='pageNav'> 
        
        <h1>NORDIC ROSE</h1>

    <nav className="items"> 
        {navItems.map((item) => (
            <a key={navItems} href="#" className="item">{item}</a>
        ))}
    </nav>
    
    </div>
  )
}

export default Navigaton