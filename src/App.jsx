import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import './App.css'
import Transactions from './Components/Trasactions'
import { IoChevronUp } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import Filter from './Components/Filter'

import { useState } from 'react'


function App() {

  const transactionsData = {
     today: [
      {
        id: 1,
        type: 'Cash withdrawal',
        status: 'Successful',
        amount: 'USD 3000',
        date: 'Apr 03,2022',
        icon: 'CallReceived'
      },
      {
        id: 2,
        type: 'Support my outreach',
        status: 'Shawn Kane',
        amount: 'USD 600',
        date: 'Apr 03,2022',
        icon: 'CallReceived'
      }
    ],
    yesterday: [
      {
        id: 4,
        type: 'Learn how to pitch your ideas',
        status: 'Dujon Jericho',
        amount: 'USD 500',
        date: 'Apr 02,2022',
        icon: 'CallReceived'
      }
    ],
    last7days: [
      {
        id: 3,
        type: 'Cash withdrawal',
        status: 'Pending',
        amount: 'USD 1004',
        date: 'Apr 01,2022',
        icon: 'CallMade'
      }
    ]
  }


  const [show, setShow] = useState(false)

  const handleShow = ( ) =>{
    setShow(!show)
  }

  return (
    <>  
      <Navigation/>
      <Hero/>
      <main className="midSec">
        <div className="midLft">
          <h2>24 Transactions</h2>
          <p>Your transactions for the last 7 days</p>
        </div>
        <div className="midRht">
          <button onClick={handleShow}>filter {show ? <IoChevronUp />  :<IoChevronDown />} </button>
          <button>Export List <FiDownload /></button>
        </div>
      </main>
      {show &&  <Filter/> }
      <Transactions/>

    </>
  )
}

export default App
