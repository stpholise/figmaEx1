


import Graph from "./Graph";

import Info from '../assets/info.svg'
import Products from '../assets/Product Icons.svg'
import Products2 from '../assets/Product Icons3 (2).svg'
import Products3 from '../assets/Product Icons (2).svg'
import Products4 from '../assets/Product Icons3.svg'

const Hero = () => {
    
  return (
    <>
    <main className="hero">
        <section className="tools">
            <button>
                <img src={Products} />
            </button>
            <button>
                <img src={Products2} />
            </button>
            <button>
              <img src={Products3} />
            </button>
            <button>
                <img src={Products4} />
            </button>
        </section>

        
        <div className="lft">
            <div className="available">
                <div className="avaLft">
                <h4>Available Balance</h4>
                    <h1>USD 120,500.00</h1>
                </div>
                <div className="">

                <button className="withdrawBtn"> withdraw </button>
                </div>
            </div>
            <Graph />

        </div>

            <section className="sideBar">
                <div className="box">
                    <div className="ttl">
                        <h4 >Ledger Balance</h4>
                        <img src={Info} alt='info' />
                    </div>
                    <h2 className="val">
                        USD 0.00
                    </h2>
                </div>
                <div className="box">
                    <div className="ttl">
                        <h4>Total Payout</h4>
                        <img src={Info} alt='info' />
                    </div>
                    <h2 className="val">
                        USD 55,080.00
                    </h2>
                </div>
                <div className="box">
                    <div className="ttl">
                        <h4>Total Revenue</h4>
                        <img src={Info} alt='info' />
                    </div>
                    <h2 className="val">
                        USD 175,580.00
                    </h2>
                </div>
                <div className="box">
                    <div className="ttl">
                        <h4>Pending Payment</h4>
                        <img src={Info} alt='info' />
                    </div>
                    <h2 className="val">
                        USD 0.00
                    </h2>
                </div>
                
            </section>
                
       
    </main>
    </>
  )
}

export default Hero