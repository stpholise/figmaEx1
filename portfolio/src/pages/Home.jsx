import PorfolioImage from '../assets/portfolio_image.png'
 
import linkedin from '/linkedin.svg'
import xIcon from '/x.svg'
import github from '/github.svg'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from './Skills'
import '../styles/About.css'

const Home = () => {

const socialLinks = [
  { icon: linkedin, link: 'https://www.linkedin.com/in/stephen-osa-afiana-53b7b0269/', label: 'LinkedIn' },
  { icon: xIcon, link: 'https://x.com/abross15822591', label: 'LinkedIn' },
  { icon: github, link: 'https://github.com/stpholise', label: 'LinkedIn' },
]

  return (
    <div className="home"> 
      <div className="hero">
          <div className="heroLeft"> 
              <div className="heroTextContainer">
                <h2> Hi, I am</h2>
                <h1 className="heroTitle">Osa-afiana Stephen Olise</h1>
                <h3 className="heroJob">Front end web developer  </h3>
              </div>
              <div className="socialLinks"> 
                  {
                    socialLinks.map((item, index) => (
                      <a href={item.link} rel='no-opener' target='_blank' key={index + item} className="iconBlock">
                        <img src={item.icon} alt="" className='heroIcon' />
                      </a>
                    ))
                  } 
              </div>
          </div>
          <div className="portfolioImagaContainer">
            <img src={PorfolioImage} alt="" className='porfolioImage' />
          </div>
      </div>
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home