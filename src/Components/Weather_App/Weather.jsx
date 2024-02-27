import React, { useState } from 'react'
import './Weather.css'
import Clear from '../Assets/clear.png'
import Cloud from '../Assets/cloud.png'
import Drizzle from '../Assets/drizzle.png'
import Humidity from '../Assets/humidity.png'
import Rain from '../Assets/rain.png'
import Search from '../Assets/search.png'
import Snow from '../Assets/snow.png'
import Wind from '../Assets/wind.png'


const Weather = () => {

 let api_key='6b1ea1ae41851fd201642146feb10da6';

 const [wicon,setWicon]= useState(Cloud);

 const search = async()=>{

   const element = document.getElementsByClassName('cityInput')

   if (element[0].value==='') {
    
    return 0 ;
   }

   let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
   
  

   let response= await fetch(url);
   let data = await response.json();

   const humidity = document.getElementsByClassName('humidity-percent')
   const wind = document.getElementsByClassName('wind-rate')
   const temprature = document.getElementsByClassName('weather-temp')
   const location = document.getElementsByClassName('weather-location')


   humidity[0].innerHTML = data.main.humidity + '%' ;
   wind[0].innerHTML = data.wind.speed + 'km/h';
   temprature[0].innerHTML = data.main.temp +'℃';
   location[0].innerHTML = data.name ;

   if (data.weather[0].icon==='01d'||data.weather[0].icon==='01n') {
    
    setWicon(Clear)
   }
   else if (data.weather[0].icon==='02d'||data.weather[0].icon==='02n'){
    setWicon(Cloud)
   }
   else if (data.weather[0].icon==='03d'||data.weather[0].icon==='03n'){
    setWicon(Drizzle)
   }
   else if (data.weather[0].icon==='04d'||data.weather[0].icon==='04n'){
    setWicon(Drizzle)
   }
   else if (data.weather[0].icon==='09d'||data.weather[0].icon==='09n'){
    setWicon(Rain)
   }
   else if (data.weather[0].icon==='10d'||data.weather[0].icon==='10n'){
    setWicon(Rain)
   }
   else if (data.weather[0].icon==='13d'||data.weather[0].icon==='13n'){
    setWicon(Snow)
   }
   else{
    setWicon(Clear)
   }
 }


 return (
  <div className='container'>
   <div className="top-bar">
    <input type="text" className="cityInput" placeholder='Search a City' />
    <div className="search-icon" onClick={()=>{search()}}>
     <img src={Search} ></img>
   </div>
    </div>
    <div className="weather-image">
     <img src={wicon} alt="" />
    </div>
    <div className="weather-temp"></div>
    <div className="weather-location">London</div>
    <div className="data-container">
     <div className="element">
      <img src={Humidity} alt="" />
      <div className="data">
       <div className="humidity-percent">64ºC</div>
       <div className="text">Humidity</div>
      </div>
     </div>

     <div className="element">
      <img src={Wind} alt="" />
      <div className="data">
       <div className="wind-rate">18 Km/h</div>
       <div className="text">Wind Speed</div>
      </div>
     </div>


    </div>
  </div>
 )
}

export default Weather