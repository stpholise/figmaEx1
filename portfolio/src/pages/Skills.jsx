 
//  import Icon from '/icons/git.svg'
 import REACT from '/icons/react.svg'
 import REDUX from '/icons/redux.svg'
 import JS from '/icons/js.svg'
 import GIT from '/icons/html_5.svg'
 import HTML5 from '/icons/html_5.svg'
 import CSS3ICON from '/icons/css_3.svg'
 import FIGMA from '/icons/figma.svg'
 import MONGODB from '/icons/mongoDb.svg'
 import BOOTSTRAP from '/icons/bootstrap-solid 1.svg'
 import NODE from '/icons/Group.svg'
 import '../styles/Skills.css'

const Skills = () => { 
    const skills = [
        { title: 'HTML5', use:'For structuring your pages.', icon: HTML5},
        { title: 'CSS3', use:'For styling your portfolio. You can use a preprocessor like Sass or SCSS if you want.', icon: CSS3ICON},
        { title: 'JavaScript', use:'For adding interactivity.', icon: JS },
        { title: 'React', use:'If you want to showcase your ability to work with modern JavaScript', icon: REACT},
        { title: 'Redux', use:'If you want to showcase your ability to work with modern JavaScript', icon: REDUX},
        { title: 'GIT', use:'If you want to showcase your ability to work with modern JavaScript', icon: GIT},
      
    ]

    const learning =[
        { title: 'FIGMA', use:'If you want to showcase your ability to work with modern JavaScript', icon: FIGMA},
        { title: 'Bootstrap CSS', use:'For utility-first CSS or prebuilt components and styles.', icon: BOOTSTRAP },
        { title: 'Node.js/Express', use:'For backend development.', icon:NODE},
        { title: 'MongoDB', use:'for data base', icon:MONGODB} 
    ]

  return (
    <div className='skillsContainer'>
    <h3 className='sectionHeading'> SKILLS</h3>
    <div className='skillWrapper'>
        <h3 className='skillHeading  '>Using Now: </h3>
    <div className='skills'>
        {
            skills.map((item, index) => (
                <div key={index} className="skillCard">
                    {
                        item.icon ?    <img src={item.icon} alt="item Icon" className='skillIcon' /> : null
                    }
                 
                    <h3 className="skillTitle">{item.title} </h3>
                    {/* <h4 className="skillUse">{item.use} </h4> */}
                </div>
            ))
        }
    </div>
    </div>
    <div className="skillWrapper">
        <h3 className="skillHeading">Learning:</h3>
    
        <div className="skills">
        {
                learning.map((item, index) => (
                    <div key={index} className="skillCard">
                        {
                            item.icon ?    <img src={item.icon} alt="item Icon" className='skillIcon' /> : null
                        }
                    
                        <h3 className="skillTitle">{item.title} </h3> 
                    </div>
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default Skills