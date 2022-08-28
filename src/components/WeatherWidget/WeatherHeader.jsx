import React from "react";
import PropTypes from 'prop-types';

const WeatherHeader = ({ location, dateTime }) => {

    return (
        <React.Fragment>
            <h2 className="location-header">{location}</h2>
            <div className="weather-today">
                <div className="date-time-cont">{dateTime}</div>
            </div>
        </React.Fragment>
    );
}

WeatherHeader.propTypes = {
    location: PropTypes.string,
    dateTime: PropTypes.string,
};

export default WeatherHeader;