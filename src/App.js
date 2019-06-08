import React from 'react';
import './App.css';
import Form from './Form'
import Weather from './Weather'


const API_KEY = '536d4ba822bb38ab13ae1a2317bec843'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      details:'',
      city: '',
      country: '',
      temperature: '',
      humidity: '',
      pressure: '',
      main: '',
      wind: ''
    }
  }

  onInputCity = (e) => {
    this.setState({city: e.target.value})
  }

  onInputCountry = (e) => {
    this.setState({country: e.target.value})
  }


  assignValues = (data) => {
    console.log(data)
    this.setState({
      temperature: data.main.temp,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind: data.wind.speed,
      main: data.weather[0].main,
      city: data.name,
      country: data.sys.country
    })
  }

  onSubmit = (e) => {
    console.log('yes')
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(response => this.assignValues(response))
  }

  


  render(){

      const { city , country, temperature, humidity, pressure, wind, main } = this.state;
      return (
      <div>
        <Form submit={this.onSubmit} City={this.onInputCity} Country={this.onInputCountry}/>
        {
          humidity && pressure ? 
          <Weather 
          displayCity={city} 
          displayCountry={country} 
          temperature={temperature} 
          humidity={humidity}
          pressure={pressure}
          wind={wind}
          main={main}
          />
          : console.log("no entries")
        }
      </div>
    );
    }  
  }
  

export default App;
