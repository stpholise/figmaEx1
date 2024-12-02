import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import FccTest from './pages/FccTest'


import './App.css'
import Test2 from './pages/Test2'

function App() {

  return (
    <>
      <Router>
            <h1>testing RESTful API</h1>
            <p> </p>
        <Routes>
          <Route exact path='/' element={<Test2 /> } />
          <Route exact path='/test1' element={<FccTest />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
