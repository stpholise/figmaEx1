// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navigaton from './Components/Navigaton'
import Image from './assets/image 2.png'
import Rectangle12 from './assets/Rectangle 12.png'
import Rectangle13 from './assets/Rectangle 13.png'
import Rectangle11 from './assets/Rectangle 11.png'

import Rectangle9 from './assets/Rectangle 9.png'
import Rectangle8 from './assets/Rectangle 8.png'
import Rectangle14 from './assets/Rectangle 14.png'
import Rectangle15 from './assets/Rectangle 15.png'
import Rectangle16 from './assets/Rectangle 16.png'
import Rectangle18 from './assets/Rectangle 18.png'
import Rectangle19 from './assets/Rectangle 19.png'


function App() {

  const footItems = ['DIGITAL', 'PRODUCT', 'DESIGN', 'WORK', 'UX', 'DESIGN', 'DISTRIBUTED', 'CREATIVITY', 'STRATEGY', 'SUSPENCE ', 'GROWTH']
  // const [count, setCount] = useState(0)
  

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

        <Navigaton/>
        <div className="hero">
          <img src={Image} className="logo imge" alt="React logo"  />
          <h1 className="mHeading">
            A few words about this blog platform, Ghost, and how this site was made.
          </h1>
          <p>
            Why Ghost (& figma) instead of Medium, WordPress or other options?
          </p>

        </div>

        <div className="article">
            <h2>All artiicles</h2>
            <div className="container">
              <div className="grid2">

                <div className="box">
                  <img src={Rectangle12} alt="" />
                  <p>Here are some things you should know regarding how we work</p>
                </div>
                <div className="box">
                  <img src={Rectangle13} alt="" />
                  <p>Granny gives everyone the finger, and other tips from OFF Barcelona</p>
                </div>
              
                <div className="box">
                  <img src={Rectangle11} alt="" />
                  <p>connecting artificial inteligence with digital product design</p>
                </div>
                <div className="box">
                  <img src={Rectangle14} alt="" />
                  <p>Its all about finding the perfect balance</p>
                </div>
                <div className="box">
                  <img src={Rectangle9} alt="" />
                  <p>I believe learning is the most important skill</p>
                </div>
                <div className="box">
                  <img src={Rectangle8} alt="" />
                  <p>clients are part of the team </p>
                </div>

                <div className="box">
                  <img src={Rectangle15} alt="" />
                  <p>clients are part of the team </p>
                </div>
                <div className="box">
                  <img src={Rectangle16} alt="" />
                  <p>Here are some of the things you need to know regarding how we work</p>
                </div>
                <div className="box">
                  <img src={Rectangle18} alt="" />
                  <p>connecting artificial inteligence with digital product design</p>
                </div>
                <div className="box">
                  <img src={Rectangle19} alt="" />
                  <p>How morder remote working tool get along with Old Schools Cowboys methods</p>
                </div>
              </div>
            </div>
        </div>

      <div className="footer">
        <div className="footop">
          {footItems.map((item) => (
            <a key={footItems} href="#" className="fitem">{item}</a>
          ))}
        </div>
        <div className="footaMain finfo">
          <h2>NORDIC ROSE</h2>
          <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eveniet hic at, nesciunt modi ab in eligendi itaque eius dolorum.</p>
          <div className="footlink">
          <a href="#" className="flink">TWITTER</a>
          <a href="#" className="flink">LINKEDIN</a>
          <a href="#" className="flink">RSS</a>
        </div>
        </div>
       <div className="bottom">
          <p>&copy; 2012-2020 Nordic Rose Co.</p>
          <p> All rights reserved.</p>
       </div>
      </div>

    </>



  )
}

export default App
