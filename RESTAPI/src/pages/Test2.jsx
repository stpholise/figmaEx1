import { useState, useEffect } from 'react' 


const Test2 = () => {
    const [ jobs, setJobs ] = useState([]) 

    const today = new Date()
    // console.log(today)
    const getJobs = async () => {
         const settings = {
            method: 'GET',
            Accept: 'application/json',
        }
        try{
            const response = await fetch(
`https://api.adzuna.com/v1/api/jobs/us/search/2?app_id=22886062&app_key=eed206437ecfaae0d5146924f8038553`              
 ,settings)
            const data = await response.json() 
            const results  =  await data.results
            // console.log(data)
            setJobs(results)
        }
        catch(error) {
          console.log(error)
        }
    }

    useEffect(() =>{
      getJobs()
    },
     [])

  return (
    <div>
       { jobs &&
        jobs.map((job) => {
           const {
            location, 
            description,
             created,
             title,
            company,
            //  category, 
            redirect_url,  
            id} = job
           const createDate = new Date(created)
           
           const timeDifference = today.getTime() - createDate.getTime(); 
           const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
           console.log(daysDifference)

         return (
          <div key={id}> 
            <h2>{title}</h2>
            <h4>{company.display_name}</h4>
            <p>{location.area.join(', ')}</p>
            <p>{description}</p>
            <p>{daysDifference} days ago</p>
            {/* <p>{category.label}</p> */}
            <a href={redirect_url}>see more</a>  
          </div>
        )})
       }        
    </div>
  )
}

export default Test2