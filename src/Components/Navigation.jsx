// IMPORTING ICONS


import MainstackLogo from '../assets/mainstack-logo.svg'
import Home from '../assets/home.svg'
import Analysis from '../assets/insert_chart.svg'
import Payments from '../assets/payments.svg'
import Group from '../assets/group.svg'
import Widget from '../assets/widgets.svg'
import Notification from '../assets/notifications.svg'
import Chat from '../assets/chat.svg'
import Avi from '../assets/avi.svg'
import Menu from '../assets/menu.svg'




const Navigation = () => {
  return (
    <>
        <nav className="mNav">
            <div className="logo">
            <img src={MainstackLogo} alt="mainstack logo" />
            </div>
            <div className="midNav">
                <div className="link">
                    <img src={Home} alt="Home icon" />
                    <p className="linkText">Home</p>
                </div>
                <div className="link">
                    <img src={Analysis} alt="Analysis icon" />
                    <p className="linkText">Analytics</p>
                </div>
                <div className=" bgBlack link">
                    <img src={Payments} alt="Payments icon" />
                    <p className="linkText">Revenue</p>
                </div>
                <div className="link">
                    <img src={Group} alt="Group icon" />
                    <p className="linkText">CRM</p>
                </div>
                <div className="link">
                    <img src={Widget} alt="Widget icon" />
                    <p className="linkText">Apps</p>
                </div>
            </div>
            <div className="endNav">
                <div className="link">
                    <img src={Notification} alt="Notification icon" />
                </div>
                <div className="link">
                <img src={Chat} alt="Notification icon" />
                </div>
                <div className="link toggleIcon">
                    <div className="ball">
                        <img src={Avi} alt="" />
                    </div>
                    <div className="ball">
                       <img src={Menu} alt="" />
                    </div>
                </div>
            
            </div>
        </nav>
    </>
  )
}

export default Navigation