import {screen, render, fireEvent} from '@testing-library/react';   
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
    describe('Check if validation is working', () => {
        test('Click on Send with error', async() =>{
            render(<BrowserRouter><Login /></BrowserRouter>);
            const submit = screen.getByRole('button', {name: 'Login'});
            const nameField = screen.getByRole('textbox', {name: 'Username'}) as HTMLInputElement;
            const passwordField = screen.getByLabelText(/password/i) as HTMLInputElement;
           // screen.logTestingPlaygroundURL()
            await fireEvent(
                submit,
                new MouseEvent('click', 
                    {
                        bubbles: true,
                        cancelable: true,
                    }
                )
            )
            expect(nameField.value).toBe('');
            expect(passwordField.value).toBe('');
        })
    });
});