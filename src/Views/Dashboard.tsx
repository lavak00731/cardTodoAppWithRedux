import LoggedInfoType from '../Interfaces/LoggedInfoType';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getService from '../Services/getService';
import { Layout } from '../Components/Layout';
import { NavComp } from '../Components/NavComp';
import { MainComp } from '../Components/MainComp';
import { useDispatch } from 'react-redux';
import RootState from '../Interfaces/RootState';
import { CREATETASK, CREATECATEGORY } from '../Constants/reducerConstans';
import { Footer } from '../Components/Footer';


export const Dashboard = () => {
  const [tasks, setTasks] = useState();
  const [categories, setCategories] = useState();
  const loggedData:LoggedInfoType = useSelector((store: RootState) => store.login);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getService('http://localhost:5000/tasks', signal).then((data)=> setTasks(data));
    getService('http://localhost:5000/categories', signal).then((data) => setCategories(data));    
    return () => {
      controller.abort();
    }
  }, []);
  useEffect(() => {
    document.title = 'Dashboard'
  
    return () => {
      document.title = ''
    }
  }, [])
  useEffect(() =>{
    dispatch({type:CREATETASK, payload: tasks});
    dispatch({type:CREATECATEGORY, payload: categories})

  })
  
  

  return (
    <Layout>
      <NavComp user={loggedData.user}/>
      <MainComp />
      <Footer />
    </Layout>
  )
}
