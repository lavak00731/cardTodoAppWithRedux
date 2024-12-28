import {screen, render} from '@testing-library/react';   
import {Login} from '../Views/Login';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom'; 
import { BrowserRouter } from 'react-router';

describe('Login tests', () => {
    describe('Render Login and its components', () => {
        test('Render Login', () => {
            render(<BrowserRouter><Login /></BrowserRouter>);
            const login = screen.getByRole('heading', { level: 1, name: 'Login' });
            expect(login).toBeInTheDocument();
        });
    });

});