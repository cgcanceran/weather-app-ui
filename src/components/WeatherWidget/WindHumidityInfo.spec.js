import React from 'react';
import { render, screen } from '@testing-library/react';
import WindHumidityInfo from './WindHumidityInfo';

describe('WindHumidityInfo Component', () => {
    const mockMain = {
        main: {
            humidity: 59,
            temp: 290.23,
            temp_min: 287.80,
            temp_max: 294.49,
        },
        wind: {
            speed: 6.17,
        },
        weather: [
            {
                description: 'scattered clouds',
            }
        ]
    }
    it('should render the WindHumidityInfo Component', () => {
        render(
            <WindHumidityInfo weather={mockMain} />
        );

        const description = screen.getByText((content, element) => {
            return content.startsWith('scattered clouds');
        });
        const wind = screen.getByText((content, element) => {
            return content.startsWith('6.17');
        });
        const humidity = screen.getByText((content, element) => {
            return content.startsWith('59');
        });
        expect(description).toBeInTheDocument();
        expect(wind).toBeInTheDocument();
        expect(humidity).toBeInTheDocument();
    });
});
