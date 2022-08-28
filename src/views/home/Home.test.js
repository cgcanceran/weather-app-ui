import { render, screen } from '@testing-library/react';
import Home from './Home';
import React from "react";

test('renders learn Home Page', () => {
  render(<Home />);
  const linkElement = screen.getByText('Fetching data to server.');
  expect(linkElement).toBeInTheDocument();
});
