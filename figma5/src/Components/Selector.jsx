import Select from 'react-select'
import { useState } from 'react'

const Selector = () => {
  const [ selectedOption, setSelectedOption ] = useState('')


  const handleSelection = (option) => {
    if(!option) return 
    setSelectedOption(option)
   
  }

  const payPeriod = [
    {value: '', label: 'Select a pay period '},
    {value: 'weekly', label: 'Weekly'},
    {value: 'biweekly', label: 'Biweekly'},
    {value: 'semimonthly', label: 'Semimonthly'},
    {value: 'monthly', label: 'Monthly'},
  ]



  return (
    <div>
          <Select 
                    name='pay_period' 
                    className='radius5px '
                    options={payPeriod}
                    onChange={(option) => handleSelection(option)}
                    value={selectedOption}
                    menuPlacement="top"
                    styles={
                      {
                        control: (baseStyles,  ) => ({
                          ...baseStyles,
                          borderColor:  '#ccc',
                          border:  '1px solid #ccc' ,
                          outline: 'none',
                          boxShadow: 'none',
                          ':focus': {
                            borderColor: '#ccc', // Keep the red border even on focus
                            boxShadow: 'none', // Remove box-shadow on focus
                          },
                          ':hover': {
                            borderColor: '#ccc', // Keep the gray border even on hover
                          }
                        }),
                        option: (baseStyles, state) => ({
                          ...baseStyles,
                          backgroundColor: state.isFocused 
                            ? '#88bef4f6' 
                            : state.isSelected
                            ? '#0A84FF'
                            : '#fff',
                          color: state.isFocused ? '#fff' : '#000',
                          cursor: 'pointer',
                        }),
                        valueContainer: (baseStyles) => ({
                          ...baseStyles,
                          border: 'none',
                        }),
                        singleValue: (baseStyles) => ({
                          ...baseStyles,
                          color: '#333',
                        }),
                      }
                    } 
                />
    </div>
  )
}

export default Selector