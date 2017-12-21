import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ZIPSearch from './ZIPSearch.js';
import WeatherIcon from './WeatherIcon.js';
import axios from 'axios';
import * as R from 'ramda';
import '../../styles/App.css';

const API_KEY = '2839dc7ae270c56997441e799c7848dd';
const API_URL = 'https://api.openweathermap.org/data/2.5/';

class CurrentWeather extends Component {
	constructor(props) {
		super(props);

		this.state = {
			zipCode: '',
			currentWeather: {}
		};
	}

	onClick = () => {
		let zipCode = this.state.zipCode;
		let url = API_URL + 'weather'

		axios.get(url, {
			params: {
				zip: zipCode,
				units: 'imperial',
				appid: API_KEY,
			}
		})
		.then((response) => {
			console.log(response.data);
			this.setState({
				currentWeather: response.data
			})
		})
		.catch((error) => {
			console.log(error);
		})
	}

	handleUpdate = (zip) => {
		this.setState({
			zipCode: zip
		})
	}

	render() {
		let { zipCode, currentWeather } = this.state;

		return (
			<div className="App">
				<Container>
					<ZIPSearch onZipCodeEntry={this.handleUpdate} onClick={this.onClick}/>
					<span>You entered: {zipCode}</span>
					<br />
					{!R.isEmpty(this.state.currentWeather)
						? 	<div>
								<span>Current Temp in {currentWeather.name} is {Math.round(currentWeather.main.temp)}.</span>
								<WeatherIcon code={currentWeather.weather[0].icon} description={currentWeather.weather[0].description} />
								<ul>
									<li>High: {currentWeather.main.temp_max}</li>
									<li>Low: {currentWeather.main.temp_min}</li>
									<li>Humidity: {currentWeather.main.humidity}</li>
								</ul>
								<h1>{Math.round(currentWeather.main.temp)}</h1>
							</div>
						: null}


				</Container>
			</div>
		);
	}
}

export default CurrentWeather;
