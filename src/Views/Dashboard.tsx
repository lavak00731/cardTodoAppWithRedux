import LoggedInfoType from '../Interfaces/LoggedInfoType';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getService from '../Services/getService';
import { Layout } from '../Components/Layout';
import { NavComp } from '../Components/NavComp';
import { MainComp } from '../Components/MainComp';
import { useDispatch } from 'react-redux';
import RootState from '../Interfaces/RootState';
import { CREATETASK, CREATECATEGORY, CREATETAGS } from '../Constants/reducerConstans';
import { Footer } from '../Components/Footer';
import { Modal } from '../Components/Modal';


export const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([])
  const loggedData:LoggedInfoType = useSelector((store: RootState) => store.login);
  const dispatch = useDispatch();

  // Tener un useEffect que escuche al param o query, y si es un valor válido
  // lanzar el modal.
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getService('http://localhost:5000/tasks', signal).then((data)=> setTasks(data));
    getService('http://localhost:5000/categories', signal).then((data) => setCategories(data));    
    getService('http://localhost:5000/tags', signal).then((data)=> {
      console.log("tags: ->", data);
      setTags(data)
    })
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
    dispatch({type:CREATECATEGORY, payload: categories});
    dispatch({type: CREATETAGS, payload: tags});
  }, [tags, categories, tasks])
  
  

  return (
    <Layout>
      <NavComp user={loggedData.user}/>
      <MainComp />
      <Modal /> 
      <Footer />
    </Layout>
  )
}
