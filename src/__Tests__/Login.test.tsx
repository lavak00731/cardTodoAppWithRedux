import {screen, render, fireEvent, waitFor} from '@testing-library/react';   
import {Login} from '../Views/Login';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom'; 
import { BrowserRouter } from 'react-router';
import { FakeApp } from './fake/FakeApp';

describe('Login tests', () => {
    describe('Render Login and its components', () => {
        test('Render Login', () => {
            render(<BrowserRouter><Login /></BrowserRouter>);
            const login = screen.getByRole('heading', { level: 1, name: 'Login' });
            expect(login).toBeInTheDocument();
        });
    });
    describe('Check if username and password are not empty, login redirects', () => {
        test('checks redirects', async() =>{
            render(<FakeApp authenticated={{ user: "Ezequiel", isLogged: true }} />);
            const submit = screen.getByRole('button', {name: 'Login'});
            fireEvent.change(screen.getByLabelText("Username"), { target: { value: "password123" } })
            fireEvent.change(screen.getByLabelText("Password"), { target: { value: "password123" } })
            //screen.logTestingPlaygroundURL()
           fireEvent.click(submit)

           await waitFor(() => {
               expect(screen.getByText('Dashboard')).toBeInTheDocument();
           })
        })
    });


});