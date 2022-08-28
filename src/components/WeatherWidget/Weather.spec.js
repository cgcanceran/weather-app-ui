import React from 'react';
import { render, screen } from '@testing-library/react';
import Weather from './Weather';
import Api from '../../api/api';

describe('Weather Component', () => {
    let APIfetchResource;
    const mockedGeocode = {
        formatted: 'test',
        geometry: {
            lat: -29.01,
            lng: 32.10
        }
    }

    const mockWeather = {
        dt: 1661590800,
        main: {
            temp: 290.23,
            temp_min: 287.80,
            temp_max: 294.49,
        },
        weather: [
            {
                icon: "01d",
            }
        ],
        wind: {
            speed: 10.7
        }
    }

    beforeEach(() => {
        APIfetchResource = jest.spyOn(Api, 'fetchWeather').mockResolvedValue(() => {});
    });

    afterEach(() => {
        APIfetchResource.mockRestore();
    });

    it('should render the Weather Component', () => {
        render(
            <Weather geocode={mockedGeocode} initWeather={mockWeather}/>
        );
        const weatherCont = screen.getByTestId('weather-widget-cont-id');
        const leftCont = screen.getByTestId('left-cont-id');
        const rightrCont = screen.getByTestId('right-cont-id');
        expect(weatherCont).toBeInTheDocument();
        expect(leftCont).toBeInTheDocument();
        expect(rightrCont).toBeInTheDocument();
        expect(APIfetchResource).toHaveBeenCalled();
    });


});
