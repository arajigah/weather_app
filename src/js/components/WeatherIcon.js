import React from 'react';

const WeatherIcon = ({ code, description }) => (
    <div>
        <img src={'http://openweathermap.org/img/w/' + code + '.png'} alt={description}/>
		<span>{description}</span>
    </div>
)

export default WeatherIcon;
