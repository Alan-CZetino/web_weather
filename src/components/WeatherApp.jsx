import React, { useState } from "react";
import Lottie from "lottie-react";
import "../styles/WeatherApp.css";
//importacion de animaciones de lottie
import ClearSkyd from "../assets/animations/clear_sky_Animation_d.json";
import ClearSkyn from "../assets/animations/clear_sky_Animation_n.json";
import FewCloudsD from "../assets/animations/few_clouds_Animation_d.json";
import FewCloudsN from "../assets/animations/few_clouds_Animation_n.json";
import MistD from "../assets/animations/mist_Animation_d.json";
import MistN from "../assets/animations/mist_Animation_n.json";
import RainD from "../assets/animations/rain_Animation_d.json";
import RainN from "../assets/animations/rain_Animation_n.json";
import ScatteredBrokenCloudsD from "../assets/animations/scattered_&_broken_clouds_Animation_d.json";
import ScatteredBrokenCloudsN from "../assets/animations/scattered_&_broken_clouds_Animation_n.json";
import SnowD from "../assets/animations/snow_Animation_d.json";
import SnowN from "../assets/animations/snow_Animation_n.json";
import ThunderstormD from "../assets/animations/thunderstorm_Animation_d.json";
import ThunderstormN from "../assets/animations/thunderstorm_Animation_n.json";



//importacion de imagen para iconos
import search_icon from "../assets/images/search.png";
import humidity_icon from "../assets/images/humidity_icon.png";
import wind_speed_icon from "../assets/images/speed-icon.png";


function WeatherApp() {

  let api_key = "3e38ddd7884589f0580a049b0f4de1be";
  const [wicon,setWicon] = useState(ClearSkyd);

  const search = async () => {
    const element = document.getElementsByClassName("city-input");

    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    //se declaran variables para traer los datos del json
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    //se vinculan las variables con el json
    humidity[0].innerHTML=data.main.humidity +" %";
    wind[0].innerHTML=data.wind.speed +" km/h";
    temperature[0].innerHTML=data.main.temp +" °c";
    location[0].innerHTML=data.name;

    if(data.weather[0].icon==="01d"){
      setWicon(ClearSkyd);
    }
    else if(data.weather[0].icon==="01n"){
      setWicon(ClearSkyn);
    }
    else if(data.weather[0].icon==="02d"){
      setWicon(FewCloudsD);
    }
    else if(data.weather[0].icon==="02n"){
      setWicon(FewCloudsN);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="04d"){
      setWicon(ScatteredBrokenCloudsD);
    }
    else if(data.weather[0].icon==="03n" || data.weather[0].icon==="04n"){
      setWicon(ScatteredBrokenCloudsN);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="10n"){
      setWicon(RainD);
    }
    else if(data.weather[0].icon==="09n" || data.weather[0].icon==="10n"){
      setWicon(RainN);
    }
    else if(data.weather[0].icon==="11d"){
      setWicon(ThunderstormD);
    }
    else if(data.weather[0].icon==="11n"){
      setWicon(ThunderstormN);
    }
    else if(data.weather[0].icon==="13d"){
      setWicon(SnowD);
    }
    else if(data.weather[0].icon==="13n"){
      setWicon(SnowN);
    }
    else if(data.weather[0].icon==="50d"){
      setWicon(MistD);
    }
    else if(data.weather[0].icon==="50n"){
      setWicon(MistN);
    }
    else{
      setWicon(ClearSkyd)
    }
  };

  return (
    <article className="container">
      <div className="top-bar">
        <input type="text" className="city-input" placeholder="search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="Es una imagen de una lupa" />
        </div>
      </div>

      <div className="weather-image">
        <Lottie animationData={wicon} />
      </div>

      <div className="weather-temp">--°c</div>
      <div className="weather-location">--</div>
      <section className="data-container">
        {/* ELEMENTOS PARA MOSTRAR LA HUMEDAD */}
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <span className="humidity-percent">--%</span>
            <span className="text">Humidity</span>
          </div>
        </div>
        {/* ELEMENTO PARA MOSTRAR VELOCIDAD DEL VIENTO*/}
        <div className="element">
          <img src={wind_speed_icon} alt="" className="icon" />
          <div className="data">
            <span className="wind-rate">-- km/h</span>
            <span className="text">Wind Speed</span>
          </div>
        </div>
      </section>

      <footer>
          <div>Desarrollado por <span>AlanCZ dev</span></div>
        </footer>
    </article>
  );
}

export default WeatherApp;
