import { useEffect, useState } from 'react';
import getService from '../Services/getService';
import { NavComp } from '../Components/NavComp';
import { Layout } from '../Components/Layout';

export const Dashboard = () => {
  const [tasks, setTasks] = useState();
  const user = sessionStorage.getItem('user');
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
      <NavComp user={user}/>
    </Layout>
  )
}
