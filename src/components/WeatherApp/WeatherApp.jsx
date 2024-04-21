import React, { useEffect, useState } from "react";
import "./WeatherApp.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import humidity_icon from "../Assets/humidity.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"
const WeatherApp=()=>{
    const [cityname,setcityname]=useState("visakhapatnam");
    function handleChange(e){
        setcityname(e.target.value);
    }
    let api_key="f1bef583af1e77e3ce159519fb97e922";
    const [weathericon,setweathericon]=useState(cloud_icon);
    const [temperature,settemperature]=useState(36);
    const [humidity,sethumidity]=useState("45%");
    const [windspeed,setwindspeed]=useState("50%");
    const [location,setlocation]=useState("visakhapatnam");
    useEffect(()=>{
        present();
        async function present(){ 
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=Metric&appid=${api_key}`;
            let response=await fetch(url);
            console.log(response);
            let data=await response.json();
            console.log(data);
            if(data.cod===200){
            sethumidity(data.main.humidity+"%");
            setwindspeed(data.wind.speed +"km/h");
            settemperature(Math.floor(data.main.temp)+"°C");
            setlocation(data.name);
            if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
                setweathericon(clear_icon);
            }else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
                setweathericon(cloud_icon);
            }else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
                setweathericon(cloud_icon);
            }else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
                setweathericon(cloud_icon);
            }else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
                setweathericon(drizzle_icon);
            }else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n" || data.weather[0].icon==="11d" ||data.weather[0].icon==="11n"){
                setweathericon(rain_icon);
            }else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
                setweathericon(snow_icon);
            }else{
                setweathericon(clear_icon);
            }
            setcityname("");
        }
    }//present();
},[]);
        const search = async ()=>{
        console.log(cityname);
         if(cityname!==""){
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=Metric&appid=${api_key}`;
            let response= await fetch(url);
            console.log(response);
            let data=await response.json();
            console.log(data);
            if(data.cod===200){
            sethumidity(data.main.humidity+"%");
            setwindspeed(data.wind.speed +"km/h");
            settemperature(Math.floor(data.main.temp)+"°C");
            setlocation(data.name);
            if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
                setweathericon(clear_icon);
            }else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
                setweathericon(cloud_icon);
            }else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
                setweathericon(cloud_icon);
            }else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
                setweathericon(cloud_icon);
            }else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
                setweathericon(drizzle_icon);
            }else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n" || data.weather[0].icon==="11d" ||data.weather[0].icon==="11n"){
                setweathericon(rain_icon);
            }else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
                setweathericon(snow_icon);
            }else{
                setweathericon(clear_icon);
            }
            setcityname("");
        }else{
            alert("Enter a valid city");
            setcityname("");
        }
        }else{
            alert("Enter a city"); 
        }
    }
    return(
      <div className="container">
        <div className="top-bar">
                <input type="text" className="city-name" placeholder="Search!"  value={cityname} onChange={handleChange}/>
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="search" />
                </div>
            </div>
            <div className="weather-image">
                <img src={weathericon} alt="cloud" />
            </div>
            <div className="weather-temp">{temperature}</div>
            <div className="weather-location">{location}</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="humidity" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">{humidity}</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="wind" className="icon" />
                    <div className="data">
                        <div className="windspeed-percent">{windspeed}</div>
                        <div className="text">Windspeed</div>
                    </div>
                    </div>
            </div>
        </div>
    )
}
export default WeatherApp;