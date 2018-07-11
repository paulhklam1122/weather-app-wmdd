import React from 'react'

const Weather = (props) => (
  <div className='weather__info'>
    <p className='weather__key'>
      Location: <span>Vancouver, Canada</span>
    </p>
    <p className='weather__key'>
      Temperature: 23&deg;C
    </p>
    <p className='weather__key'>
      Conditions: Some description
    </p>
    <p className='weather__key'>
      Humidity: 60%
    </p>
    <p className='weather__key'>
      Minimum Temperature: 16&deg;C
    </p>
    <p className='weather__key'>
      Maximum Temperature: 25&deg;C
    </p>
    <p className='weather__key'>
      Error: Sample Error
    </p>
  </div>
)

export default Weather
