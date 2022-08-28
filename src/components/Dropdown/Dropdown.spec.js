import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
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

    it('should render the Dropdown Component', () => {
        render(<Dropdown
            id='dropdown'
            label='cities'
            options={cities}
            onChange={jest.fn()}
        />);
        const label = screen.getByText('cities');
        expect(label).toBeInTheDocument();
    });

    it('should display dropdown when field is click', async () => {
        render(<Dropdown
            id='dropdown'
            label='cities'
            options={cities}
            onChange={jest.fn()}
        />);
       fireEvent.click(screen.getByText('cities'));
    });

});
