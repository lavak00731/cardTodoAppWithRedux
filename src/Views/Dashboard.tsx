import { useEffect, useState } from 'react';
import store from './../Store/Store'; 
import getService from '../Services/getService';
import { NavComp } from '../Components/NavComp';
import { Layout } from '../Components/Layout';
import { useSelector } from 'react-redux';
import LoggedInfoType from '../Interfaces/LoggedInfoType';

type RootState = ReturnType<typeof store.getState>;

export const Dashboard = () => {
  const [tasks, setTasks] = useState();
  const loggedData:LoggedInfoType = useSelector((store: RootState) => store.login);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getService('http://localhost:5000/tasks', signal).then((data)=> setTasks(data) )
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
  


  return (
    <Layout>
      <NavComp user={loggedData.user}/>
    </Layout>
  )
}
