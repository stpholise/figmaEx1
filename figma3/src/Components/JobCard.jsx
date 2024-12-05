 import { PropTypes } from 'prop-types'
import DefaultComapny from '../assets/company-svgrepo-com.svg'


const JobCard = ({title, company, location, category, redirectUrl, postedAt, }) => {
  return (
    <>
        
                <div className='imageDetail'>
                    <img src={DefaultComapny} style={{width:'100%'}}  alt="" />
                </div>
                <div className='textDetail'>
                    <a href={redirectUrl} target='_blank'><h4 className='jobTitle'>{title}</h4></a>
                    <h5 className='companyName'>{company}</h5>
                    <p>{location.join(', ')}</p>
                    <p>{category}</p>
                    <p className='postDate'>{postedAt < 1 ? '' : postedAt} day&lsquo;s ago </p> 
                </div>
         
    </>
  )
}

JobCard.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    redirectUrl: PropTypes.string.isRequired,
    postedAt: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    
}

export default JobCard