import '../styles/Projects.css'
import LinkExternal from '/icons/link-external.svg'
import { Link } from 'react-router-dom'

import AdviceGenerator from '../assets/images/advice-generator.jpeg'
import ArticleReview from '../assets/images/article-preview-desktop-design.jpg'
import BaseAppreal from '../assets/images/base-appereal-desktop-design.jpg'
import Blogr from '../assets/images/blogr.jpeg'
import Bookmark from '../assets/images/bookmark.jpeg'
import Calculator from '../assets/images/calculator.jpg'
import ComingSoon from '../assets/images/coming-soon.jpg'
import Faq from '../assets/images/faq.jpg'
import Flyo from '../assets/images/flyo.jpeg'
import Insure from '../assets/images/insure.jpeg'
import InteractiveCard from '../assets/images/interactive-card.jpg'
import InteractivePrice from '../assets/images/interactive-price.jpg'
import InteractiveRating from '../assets/images/interactive-rating.jpg'
import IntroComponent from '../assets/images/intro-component.jpg'
import IntroSection from '../assets/images/intro-section.jpg'
import LoopStudio from '../assets/images/loop studio.jpg'
import NewsHomepage from '../assets/images/news-homepage.jpeg'
import NotificationPage from '../assets/images/notification-page.jpg'
import PricingComponent from '../assets/images/pricing-component.jpg'
import ProjectTracking from '../assets/images/project-tracking.jpg'
import ShoeSales from '../assets/images/Screenshot_18-3-2024_61021_stpholise.github.io.jpeg'
import SocialDashboard from '../assets/images/social-dashboard.jpg'
import Sunnyside from '../assets/images/sunnyside.jpg'
import TipCalculator from '../assets/images/tip-calculator.jpg'

const Projects = () => {

    const projects = [
        {   title: 'Advice Generator', 
            description: 'A simple advice generator that fetches advice from an API.', 
            image: AdviceGenerator, 
            link: 'https://stpholise.github.io/advice-generator/' },
        {   title: 'Article Preview', 
            description: 'A simple article preview component.', 
            image: ArticleReview, 
            link: 'https://stpholise.github.io/article-preview-component-maste/'
        },
        {   title: 'Base Appreal', 
            description: 'A simple article preview component.', 
            image: BaseAppreal, 
            link: 'https://stpholise.github.io/base-apparel/' 
        },
        {   title: 'Blogr', 
            description: 'A simple article preview component.', 
            image: Blogr, 
            link: 'https://stpholise.github.io/blogr-landing-page-main/' 
        },
        {   title: 'Bookmark', 
            description: 'A simple article preview component.', 
            image: Bookmark, 
            link: 'https://stpholise.github.io/bookmarklanding-page/' 
        },
        {   title: 'Calculator', 
            description: 'A simple article preview component.', 
            image: Calculator, 
            link: 'https://stpholise.github.io/calculator-app-main/' 
        },
        {   title: 'ComingSoon', 
            description: 'A simple article preview component.', 
            image: ComingSoon, 
            link: 'https://github.com' 
        },
        {   title: 'Faq', 
            description: 'A simple article preview component.', 
            image: Faq, 
            link: 'https://stpholise.github.io/faq-accordion-card-main/' 
        },
        {   title: 'Flyo', 
            description: 'A simple article preview component.', 
            image: Flyo, 
            link: 'https://stpholise.github.io/fylo-dark-theme-landing-page/' 
        },
        {   title: 'Insure', 
            description: 'A simple article preview component.', 
            image: Insure, 
            link: 'https://stpholise.github.io/insure-landing-page/' 
        }, 
        {   title: 'Interactive Card', 
            description: 'A simple article preview component.', 
            image: InteractiveCard, 
            link: 'InteractiveCard' 
        },
        {   title: 'Interactive Price', 
            description: 'A simple article preview component.', 
            image: InteractivePrice, 
            link: 'https://stpholise.github.io/interactive-pricing-component/' 
        },
        {   title: 'Interactive Rating', 
            description: 'A simple article preview component.', 
            image: InteractiveRating, 
            link: 'https://stpholise.github.io/interactive-rating-component/' 
        }, 
        {   title: 'Intro Component', 
            description: 'A simple article preview component.', 
            image: IntroComponent, 
            link: 'https://stpholise.github.io/intro-component-with-signup/' 
        }, 
        {   title: 'Intro Section', 
            description: 'A simple article preview component.', 
            image: IntroSection, 
            link: 'https://stpholise.github.io/intro-section-with-dropdown-navigation/' 
        }, 
        {   title: 'Loop Studio', 
            description: 'A simple article preview component.', 
            image: LoopStudio, 
            link: 'https://stpholise.github.io/Loopstudios-landing-page/' 
        },
        {   title: 'News Homepage', 
            description: 'A simple article preview component.', 
            image: NewsHomepage, 
            link: 'https://stpholise.github.io/news-homepage/' 
        },
        {   title: 'Notification Page', 
            description: 'A simple article preview component.', 
            image: NotificationPage, 
            link: 'https://stpholise.github.io/notifications-page-main-main/' 
        },
        {   title: 'Pricing Component', 
            description: 'A simple article preview component.', 
            image: PricingComponent, 
            link: 'https://stpholise.github.io/pricing-component-with-toggle-master/' 
        },
        {   title: 'Project Tracking', 
            description: 'A simple article preview component.', 
            image: ProjectTracking, 
            link: 'https://stpholise.github.io/project-tracking-intro-component/' 
        },
        {   title: 'Shoe Sales', 
            description: 'A simple article preview component.', 
            image: ShoeSales, 
            link: 'https://stpholise.github.io/myecommerce-landing-page/' 
        },
        {   title: 'Social Dashboard', 
            description: 'A simple article preview component.', 
            image: SocialDashboard, 
            link: 'https://stpholise.github.io/social-media-dashboard-with-theme-switcher-master/' 
        },
        {   title: 'Sunnyside', 
            description: 'A simple article preview component.', 
            image: Sunnyside, 
            link: 'https://stpholise.github.io/sunnyside-agency-landing-page-main/' 
        },
        {   title: 'TipCalculator', 
            description: 'A simple article preview component.', 
            image: TipCalculator, 
            link: 'https://stpholise.github.io/tip-calculator-app-main/' 
        },

    ]

    return (
        <div className='projectsSection'>
            <h3 className="sectionHeading"> PROJECTS </h3>
            <div className="projects">
                {
                    projects.slice(0, 6).map((projects, index) => (
                        <a href={projects.link} target="_blank" key={index} rel="noreferrer" className="projectLink">
                            <div  className="projectCard">
                                <img src={projects.image} alt="Project Image" className="projectImage" />
                                <div className="projectText">
                                    <h3 className="projectTitle">{projects.title}</h3>
                                    <img src={LinkExternal} alt="" className='smallIcon'/>
                                    {/* <p className="projectDescription">{projects.description}</p>  */}
                                </div>  
                            </div>
                        </a>
                    ))
                }
                
                
            </div>
            
            <Link className='viewAll' to='/projects'>View All</Link>
        </div>
    )
}

export default Projects