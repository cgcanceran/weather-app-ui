import React from 'react';
import { render, screen } from '@testing-library/react';
import LocationDropdown from './LocationDropdown';

describe('LocationDropdown Component', () => {
    const cities = [
        {
            city: "City 1"
        },
        {
            city: "City 2"
        },
        {
            city: "City 3"
        }
    ]

    it('should render the LocationDropdown Component', () => {
        render(<LocationDropdown
            cities={cities}
            onChange={jest.fn()}
        />);
        const label = screen.getByTestId('location-dropdown-cont-id');
        expect(label).toBeInTheDocument();
    });


});
