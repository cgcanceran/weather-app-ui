import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import Api from '../../api/api';
import { composeDateTime } from '../../utils/helper';
import Temperature from "./Temperature";
import WeatherHeader from "./WeatherHeader";
import WindHumidityInfo from "./WindHumidityInfo";

const Weather = ({ geocode, initWeather }) => {
    const [ weather, setWeather ] = useState(initWeather);

    useEffect(()=> {
        geocode && Api.fetchWeather(geocode.geometry.lat, geocode.geometry.lng).then(res => {
            setWeather(res);
        })
    }, [geocode]);

    const datetime = weather && composeDateTime(weather.dt);
    const imgSrc = weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

    return weather ? (
        <div className="weather-widget-cont" data-testid="weather-widget-cont-id">
            <div className="left-cont" data-testid="left-cont-id">
                <WeatherHeader location={geocode.formatted} dateTime={datetime}/>
                <Temperature temperature={weather.main} />
                <WindHumidityInfo weather={weather} />
            </div>
            <div className="right-cont" data-testid="right-cont-id">
                <div>
                    <img src={imgSrc} alt="icon"/>
                </div>
            </div>
        </div>
    ) : null;
}

Weather.propTypes = {
    geocode: PropTypes.object,
    initWeather: PropTypes.object,
};

export default Weather;