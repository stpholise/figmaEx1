import Select from 'react-select'
// import { useState } from 'react'
import { PropTypes } from 'prop-types'

const CountryFilter = ({ countryList, setCountry, country }) => {
   
      const handleCountryChange = (option) => {
        if(!option) return
        if(typeof option === 'object') {
          setCountry(option) 
        }};
       

  return (
    <div>
        <Select
            options={countryList}
            onChange={handleCountryChange}
            value={country}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? '#fff' : '#fff',
                border: state.isFocused ? 'none' : 'none',
                outline: state.isFocused ?'none' : 'none',
              }),
              
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#eee',
                primary: '#0A84FF',
              },
            })}
        />
    </div>
  )
}

CountryFilter.propTypes = {
  countryList: PropTypes.arrayOf(
   
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
    setCountry: PropTypes.func.isRequired,
    country: PropTypes.object.isRequired,
}

export default CountryFilter