import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherHeader from './WeatherHeader';

describe('WeatherHeader Component', () => {
    it('should render the WeatherHeader Component', () => {
        render(
            <WeatherHeader location="Perth, City of Perth, Australia" dateTime="Sun Aug 28 2022 @ 12:16:10" />
        );

        const location = screen.getByText('Perth, City of Perth, Australia');
        const dateTime = screen.getByText('Sun Aug 28 2022 @ 12:16:10');

        expect(location).toBeInTheDocument();
        expect(dateTime).toBeInTheDocument();
    });
});
