// Si no estas logueado no te deje entrar al dashboard, y no deberias poder ver tal cosa
// Si estas logueado te deje entrar, y deberias poder ver tal cosa
// Podes ver las tareas, categorias, modal

// Provider -> store, 
// react-redux, redux -> @redux/toolkit
// Slices, Podés modificar el estado directamente, asincronia, thunk asicronicos

// https://openwebinars.net/blog/redux-toolkit-simplifica-gestion-estado/
import {screen, render} from '@testing-library/react';   
import '@testing-library/jest-dom'; 
import { describe, test, expect, beforeAll } from 'vitest';
import { BrowserRouter } from 'react-router';
import { Dashboard } from '../Views/Dashboard';
import { Provider } from 'react-redux';
import Store from './../Store/Store';
import { ProtectedRoutes } from '../Components/ProtectedRoutes';
import { FakeApp } from './fake/FakeApp';
import TasksReducer from '../Reducers/TasksReducer';
import TaskType, { statusEnum } from '../Interfaces/TasksType';
import { CREATE_TASK, REMOVE_TASK } from '../Constants/reducerConstants';

// Testing unitario -> solamente componente, solamente redux
// Testing integracion -> componente, store

describe('Dashboard tests', ()=>{
    describe('Reach dashboard no logged', ()=>{
        // beforeEach(()
        // beforeAll
        // afterAll
        // afterEach

        test('No Render dashboard without login', ()=>{

                render(<FakeApp authenticated={{ user: "", isLogged: false }} />)

            render(<BrowserRouter><Provider store={Store}><ProtectedRoutes><Dashboard /></ProtectedRoutes></Provider></BrowserRouter>);
            const dashboard = screen.queryByText('Dashboard')
            
            expect(dashboard).not.toBeInTheDocument();
        });
        test('Render dashboard  logged in', ()=>{

                render(<FakeApp authenticated={{ user: "Ezequiel", isLogged: true }} />)

            render(<BrowserRouter><Provider store={Store}><Dashboard /></Provider></BrowserRouter>);
            const dashboard = screen.getByText('Dashboard')
            expect(dashboard).toBeInTheDocument();
        });        
    });
    describe('Testing reducers and store', () => {
        const initialState: { items: TaskType[] } = {
            items: []
        };
        let item: TaskType;
        let state: {
            items: TaskType | TaskType[];
        } | {
            items: (TaskType | TaskType[])[];
        };
        
        beforeAll(() => {
            item = {
                id: 1741735425099,
                name: "Charla nico2",
                initDate: "2025-03-14",
                dueDate: "2025-07-25",
                category: "Design",
                comment: "fadsfadsfdsa sd fasdf asf asf asf asf sd",
                status: statusEnum.notStarted,
                tags: [
                    "sample2"
                ],
                url: "Charla%20nico2"
            }
            state = TasksReducer(initialState, { type: CREATE_TASK, payload: item })
        });
        
        test('Should create the task in the redux store', () => {
           
            
            

            // state.items = [];
            if(Array.isArray(state.items)) {
                expect(state.items[0]).toEqual(item);
            } else {
                expect(state.items).toEqual(item)
            }
        });
        test('Should erase a task in the redux store', () =>{
            const statetoRemoved = TasksReducer(state, { type: REMOVE_TASK, payload: item });            

            if(Array.isArray(statetoRemoved) && Array.isArray(state)) {
                expect(statetoRemoved.length).not.toEqual(state.length)
            }
            .ite
        });
        test('Should modify a task in the redux store', () => {
            const initialState: { items: TaskType[] } = {
                items: []
            };
            const state = TasksReducer(initialState, { type: CREATE_TASK, payload: item })
        })
    })
})
