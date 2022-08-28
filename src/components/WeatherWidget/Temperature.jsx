import React from "react";
import PropTypes from 'prop-types';
import { round } from '../../utils/helper';

const Temperature = ({ temperature }) => {

    const currentTemp = temperature && round(temperature.temp - 273.15, 1);
    const minTemp = temperature && round(temperature.temp_min - 273.15, 1);
    const maxTemp = temperature && round(temperature.temp_max - 273.15, 1);

    return temperature ? (
            <React.Fragment>
                <div className="panel-divider"/>
                <div className="current-temp">{currentTemp} °C</div>
                <div className="range-temp">{minTemp} °C / {maxTemp} °C</div>
            </React.Fragment>
    ) : null;
}

Temperature.propTypes = {
    temperature: PropTypes.object,
};

export default Temperature;