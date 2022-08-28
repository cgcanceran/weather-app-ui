import React, { useState, useEffect } from 'react';
import sun from '../../assets/images/sun.png';
import './Home.css';
import LocationDropdown from '../../components/LocationDropdown/LocationDropdown';
import Api from '../../api/api';
import Weather from "../../components/WeatherWidget/Weather";

const Home = () => {
    const [ data, setData ] = useState(null);
    const [ geocode, setGeocode ] = useState(null);

    useEffect(() => {
        Api.fetchAusCities().then(res => {
            setData(res);
        })
    }, [])

    const onCityChange = (selectedCity) => {
        selectedCity && Api.fetchCityGeocode(selectedCity).then(res => {
            setGeocode(res);
        })
    }

    return data ? (
        <div className="App" data-testid="main-cont-id">
            <header className="App-header">
                <img src={sun} className="App-logo" alt="logo" />
                <LocationDropdown onChange={onCityChange} cities={data} />
            </header>

            { geocode && <Weather geocode={geocode.results[0]}/> }
        </div>
    ) : (<div>Fetching data to server.</div>);
}

export default Home;
