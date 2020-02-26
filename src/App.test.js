import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// In a longer-term project, I'd factor these out into their own files
import cars from "./cars.json";
import Car from './Car.js';

// Basic rendering test
test('Renders without crashing', () => {
    const app = render(<App />);
});

// Data set exists
test('Data set includes 425 cars', () => {
    expect(cars.length).toBe(425);
});

test('Displays dataset size correctly', () => {
    const { getByText } = render(<App />);
    const uiElement = getByText(/There are 425 cars in the data/i);
    expect(uiElement).toBeInTheDocument();
});

test('Car component renders description text', () => {
    const { getByText } = render(<Car make="Tesla" model="Model 3" type="sedan" origin="California" />);
    const uiElement = getByText(/Tesla Model 3, sedan from California/i);
    expect(uiElement).toBeInTheDocument();
});

// TODO CarList renders list, text in filter box filters results, simulate click on clear button, etc
