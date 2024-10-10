import {  useState } from 'react'

const Filter = () => {

    const transactionTypes = ["Store transaction", "Get tipped", "Withdrawals", " Chargebacks", "Cashbacks", "Refer & Earn"]
   
    const  [checkers, setCheckers ] = useState(false)

    const handleCheckers = () => {
        setCheckers(!checkers)
    }

    const formCont = (e) =>{
        e.preventDefault()
    }


  return (
    <div className="filterCont">
        
        <div className="top">
            <h3>Filter </h3>
            <button className="closeFilter">x</button>
        </div>
        <div className="timeInt">
            
                <button>Today</button>
                <button>Yesterday</button>
                <button>Last 7 days</button>
                <button>Last 30 days</button>
            
        </div>
        <form  onSubmit={formCont}>
            <div className="customDate fbox">
                <h4>Date Range</h4>
                <div className="dateFm">
                    <input type="date" />
                    <input type="date" />
                </div>
            </div>
            <div className="tType fbox">
                <h4>Transaction Type</h4>
                <button  className='btnTTl' onClick={handleCheckers} type='button'>
                    {transactionTypes.map((item, index) =>(<span key={index} >{item}</span>) )}
                 </button>
                 {checkers &&
                            <div className="tGroup">
                    <div className="type">
                        <input type="checkbox" id="storeTransaction" />
                        <label htmlFor="storeTransaction">Store Transaction</label>
                    </div>
                    <div className="type">
                        <input type="checkbox" id="getTipped" />
                        <label htmlFor="getTipped">Get Tipped</label>
                    </div>
                    <div className="type">
                        <input type="checkbox" id="withdrawals" />
                        <label htmlFor="withdrawals">Withdrawals</label>
                    </div>
                    <div className="type">
                        <input type="checkbox" id="chargebacks" />
                        <label htmlFor="chargebacks">Chargebacks</label>
                    </div>
                    <div className="type">
                        <input type="checkbox" id="cashbacks" />
                        <label htmlFor="cashbacks">Cashbacks</label>
                    </div>
                    <div className="type">
                        <input type="checkbox" id="refer" />
                        <label htmlFor="refer">Refer & Earn</label>
                    </div>
                </div>

                
               

                 } 

                
            </div>
        </form>
        
    </div>
  )
}

export default Filter 