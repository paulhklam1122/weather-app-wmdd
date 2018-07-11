import React from 'react'

const Weather = (props) => (
  <div className='weather__info'>
    {
      props.city && props.country &&
      <p className='weather__key'>
        Location: <span>{props.city}, {props.country}</span>
      </p>
    }
    {
      props.temperature &&
      <p className='weather__key'>
        Temperature: {props.temperature}&deg;C
      </p>
    }
    {
      props.description &&
      <p className='weather__key'>
        Conditions: {props.description}
      </p>
    }
    {
      props.humidity &&
      <p className='weather__key'>
        Humidity: {props.humidity}
      </p>
    }
    {
      props.minTemp &&
      <p className='weather__key'>
        Minimum Temperature: {props.minTemp}
      </p>
    }
    {
      props.maxTemp &&
      <p className='weather__key'>
        Maximum Temperature: {props.maxTemp}
      </p>
    }
    {
      props.error &&
      <p className='weather__key'>
        Error: {props.error}
      </p>
    }
  </div>
)

export default Weather
