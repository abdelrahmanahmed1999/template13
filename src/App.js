import React from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

const api_key="e36ed364400282e43250b6c4c0274d44";

class App extends React.Component{

  state={
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }

  getweather= async (e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value,
          country=e.target.elements.country.value,
          api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`),
          data=await api.json();
          console.log(data);
          if(city && country){
            this.setState({
              temperature:data.main.temp,
              city:data.name,
              country:data.sys.country,
              humidity:data.main.humidity,
              description:data.weather[0].description,
              error:''
            });
          }
          else{
            this.setState({
              temperature:'',
              city:'',
              country:'',
              humidity:'',
              description:'',
              error:'Please Fill Fields'
            });
          }
  }
  render(){
    return (
      <div className="wrapper">
        <div className="form-container">
          <h1>Weather App</h1>
          <Form weather={this.getweather}/>
          <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          />
        </div>
      </div>
    );
  } 
}

export default App;