import 'animate.css'
import { useState } from 'react'

const Animation = () => {
    const [ animation, setAnimation ] = useState(false) 
    const toggleAnimation = () => {
        setAnimation(!animation)
    }
  return (
    <div>
        <h1 className={animation ? "animate__animated animate__bounce animate__delay-0.5s	2s" : ''}>An animated element</h1>
        <p className={animation ? "animate__animated animate__bounce animate__delay-0.5s	2s" : ''}>{animation && 'animation is true'}</p>

        <button className="toggleBtn" onClick={toggleAnimation}>animation button</button>
    </div>
  )
}

export default Animation
