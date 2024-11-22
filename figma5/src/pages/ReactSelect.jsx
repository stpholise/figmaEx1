import CreatableSelect  from 'react-select/creatable'
import { useState } from 'react'

const ReactSelect = () => {
  const socialPlatforms = [
    { value: 'facebook', label: 'Facebook' },
    { value: 'twitter', label: 'Twitter' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'dribble', label: 'Dribble' },
    { value: 'github', label: 'Github' },
    { value: 'behance', label: 'Behance' },
    { value: 'youtube', label: 'Youtube' },
    { value: 'pinterest', label: 'Pinterest' },
    { value: 'tiktok', label: 'Tiktok' },
    { value: 'snapchat', label: 'Snapchat' },
  ]

    const [selectedOption, setSelectedOption] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false) 

    const handleCreate = (inputValue) => {
      setIsLoading(true)
      setTimeout(() => {
          setIsLoading(false)
          setSelectedOption({ value: inputValue.toLowerCase().replace(/\W/g, ''), label: inputValue })
          console.log(inputValue)
      }, 1000)
  }
  
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
    console.log(`Option selected:`, selectedOption)
    }

   
  return (
    <div>
         
        <CreatableSelect   
            options={socialPlatforms}
            value={selectedOption}
            isDisabled={isLoading}
            isLoading={isLoading}
            onChange={(selectedOption) => handleChange(selectedOption)}
            onCreateOption={(inputValue) => handleCreate(inputValue)}
            isClearable
        
        />

        { selectedOption && <p>Selected option: {selectedOption.label}</p> }

    </div>
  )
}

export default ReactSelect