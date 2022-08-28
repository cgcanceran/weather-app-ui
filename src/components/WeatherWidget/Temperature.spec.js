import React from 'react';
import { render, screen } from '@testing-library/react';
import Temperature from './Temperature';

describe('Temperature Component', () => {
    const mockTemperature = {
        temp: 290.23,
        temp_min: 287.80,
        temp_max: 294.49,
    }

    it('should render the Temperature Component', () => {
        render(<Temperature
            temperature={mockTemperature}
        />);
        const temp = screen.getByText((content, element) => {
            return content.startsWith('17.1');
        });
        const tempMinMax = screen.getByText((content, element) => {
            return content.startsWith('14.7 °C / 21.3 °C');
        });
        expect(temp).toBeInTheDocument();
        expect(tempMinMax).toBeInTheDocument();
    });


});
