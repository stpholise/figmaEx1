
import CallReceived from '../assets/call_received.svg'
import CallMade from '../assets/call_made.svg'


const Trasactions = () => {
  return (
    <div className="transactionCont">
        <div className="block">
            <div className="round">
                 <img src={CallReceived} alt='call received' style={{width:'100%'}}/>
            </div>
            <div className="content">
                <div className="contLft">
                    <div className="h4">Psychology of Money</div>
                    <p className="author">Roy Cash</p>
                </div>
                <div className="contRht">
                    <h4 className="amount">USD 600</h4>
                    <p className="date">Apr 03,2022</p>
                </div>
            </div>
        </div>
        <div className="block">
            <div className="round">
              <img src={CallReceived} alt='call received'/>
            </div>
            <div className="content">
                <div className="contLft">
                    <div className="h4">Buy me a coffee</div>
                    <p className="author">Jonathan Smart</p>
                </div>
                <div className="contRht">
                    <h4 className="amount">USD 100</h4>
                    <p className="date">Apr 02,2022</p>
                </div>
            </div>
        </div>
        <div className="block">
            <div className="round">
                 <img src={CallReceived} alt='call received'/>
            </div>
            <div className="content">
                <div className="contLft">
                    <div className="h4">How to build and online brand </div>
                    <p className="author">delvan ludacris</p>
                </div>
                <div className="contRht">
                    <h4 className="amount">USD 00</h4>
                    <p className="date">Apr 02,2022</p>
                </div>
            </div>
        </div>
        <div className="block">
            <div className="round callMade">
                <img src={CallMade} alt='call made' className='call'/>
            </div>
            <div className="content">
                <div className="contLft">
                    <div className="h4">Cash withdrawal</div>
                    <p className="author">Successful</p>
                </div>
                <div className="contRht">
                    <h4 className="amount">USD 3000</h4>
                    <p className="date">Apr 03,2022</p>
                </div>
            </div>
        </div>
        <div className="block">
            <div className="round">
                <img src={CallReceived} alt='call received'/>
            </div>
            <div className="content">
                <div className="contLft">
                    <div className="h4">Support my outreach</div>
                    <p className="author">Shawn Kane</p>
                </div>
                <div className="contRht">
                    <h4 className="amount">USD 600</h4>
                    <p className="date">Apr 03,2022</p>
                </div>
            </div>
        </div>
        <div className="block">
            <div className="round callMade">
                <img src={CallMade} alt='call received'/>
            </div>
            <div className="content">
                <div className="contLft">
                    <div className="h4">Cash withdrawal</div>
                    <p className="author">Pending</p>
                </div>
                <div className="contRht">
                    <h4 className="amount">USD 1004</h4>
                    <p className="date">Apr 01,2022</p>
                </div>
            </div>
        </div>
        <div className="block">
            <div className="round">
                <img src={CallReceived} alt='call received'/>
            </div>
            <div className="content">
                <div className="contLft">
                    <div className="h4">Learn how to pitch your ideas</div>
                    <p className="author">Dujon Jericho</p>
                </div>
                <div className="contRht">
                    <h4 className="amount">USD 500</h4>
                    <p className="date">Apr 02,2022</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trasactions