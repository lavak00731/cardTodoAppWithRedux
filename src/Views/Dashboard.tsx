import LoggedInfoType from '../Interfaces/LoggedInfoType';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getService from '../Services/getService';
import { Layout } from '../Components/Layout';
import { NavComp } from '../Components/NavComp';
import { MainComp } from '../Components/MainComp';
import { useDispatch } from 'react-redux';
import RootState from '../Interfaces/RootState';
import { ADD_TASKS, CREATE_CATEGORY, CREATE_TAGS } from '../Constants/reducerConstants';
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
    dispatch({type:ADD_TASKS, payload: tasks}); // []
    dispatch({type:CREATE_CATEGORY, payload: categories}); // []
    dispatch({type: CREATE_TAGS, payload: tags}); // []
  },[tasks, categories, tags]) // [tasks, categories, tags]
  
  
  // const [products, setProducts] = useState([]);
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   setProducts([1, 2, 3, 4, 5]);
  //   setArticles([1, 2, 3, 4, 5]);
  // }, [])

  // useEffect(() => {
  //   console.log(products); // [], [product1, product2, product3]
  // }, [products]);

  // useEffect(() => {
  //   console.log(articles);
  // }, [articles])


  return (
    <Layout>
      <NavComp user={loggedData.user}/>
      <MainComp />
      <Modal /> 
      <Footer />
    </Layout>
  )
}
