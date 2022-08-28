import React from "react";
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Dropdown from "../Dropdown/Dropdown";

const LocationDropdown = React.memo(({ cities, onChange }) => {
    return (
        <div data-testid="location-dropdown-cont-id">
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="location-select-label">Cities of Australia</InputLabel>
                <Dropdown id="location-select" label="Cities of Australia" options={cities} onChange={onChange}/>
            </FormControl>
        </div>
    );
});

LocationDropdown.propTypes = {
    cities: PropTypes.array,
    onChange: PropTypes.func
};

export default LocationDropdown;