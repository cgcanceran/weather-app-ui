import React from "react";
import PropTypes from 'prop-types';

const WindHumidityInfo = ({ weather }) => {
    const wind = weather && weather.wind.speed;
    const humidity = weather && weather.main.humidity;
    const description = weather && weather.weather[0].description;

    return (
        <React.Fragment>
            <div className="weather-desc">{description}</div>
            <div className="panel-divider"/>
            <div className="other-weather-info">
                <div>Wind: <b>{wind}</b> Km/h</div>
                <div>Humidity: <b>{humidity}</b>%</div>
            </div>
        </React.Fragment>
    );
}

WindHumidityInfo.propTypes = {
    weather: PropTypes.object,
};

export default WindHumidityInfo;