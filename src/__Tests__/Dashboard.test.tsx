// Si no estas logueado no te deje entrar al dashboard, y no deberias poder ver tal cosa
// Si estas logueado te deje entrar, y deberias poder ver tal cosa
// Podes ver las tareas, categorias, modal

// Provider -> store, 
// react-redux, redux -> @redux/toolkit
// Slices, Podés modificar el estado directamente, asincronia, thunk asicronicos

// https://openwebinars.net/blog/redux-toolkit-simplifica-gestion-estado/
import {screen, render} from '@testing-library/react';   
import '@testing-library/jest-dom'; 
import { describe, test, expect, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router';
import { Dashboard } from '../Views/Dashboard';
import { Provider } from 'react-redux';
import Store from './../Store/Store';
import { ProtectedRoutes } from '../Components/ProtectedRoutes';
import { FakeApp } from './fake/FakeApp';

describe('Dashboard tests', ()=>{
    describe('Reach dashboard no logged', ()=>{
        test('No Render dashboard without login', ()=>{

                render(<FakeApp authenticated={{ user: "", isLogged: false }} />)

            render(<BrowserRouter><Provider store={Store}><ProtectedRoutes><Dashboard /></ProtectedRoutes></Provider></BrowserRouter>);
            const dashboard = screen.getByText('Dashboard')
            expect(dashboard).not.toBeInTheDocument();
        });
        test('Render dashboard  logged in', ()=>{

                render(<FakeApp authenticated={{ user: "Ezequiel", isLogged: true }} />)

            render(<BrowserRouter><Provider store={Store}><Dashboard /></Provider></BrowserRouter>);
            const dashboard = screen.getByText('Dashboard')
            expect(dashboard).toBeInTheDocument();
        });
    })
})
