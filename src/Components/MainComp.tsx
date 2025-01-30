import { useSelector } from "react-redux";
import RootState from "../Interfaces/RootState";
import CategoryType from "../Interfaces/CategoryType";
import TaskType from "../Interfaces/TasksType";
import { TaskComponent } from "./TaskComponent";
import { useEffect } from "react";

export const MainComp = () => {
  
  const tasks = useSelector((store: RootState) => store.tasks.items as TaskType[]);
  const categories = useSelector((store: RootState) => store.categories.items as CategoryType[]);
  

  /*
    trello.com/?tarea=120 o trello.com/120
  */
    
  if(!categories && !tasks) {
    return <p>Loading...</p>
  }
  return (
    <>
        <main className="container mx-auto bg-white p-2 rounded-t-lg" aria-labelledby="mainTitle">
          <h1 className="font-mono text-6xl mb-4">Dashboard</h1>
          <ul className="flex flex-row align-top justify-between divide-x-2 divide-slate-500">
            {
              categories && categories.map((category) => (
                <li className="basis-70 px-2" key={category.id}>
                  <h2 className="font-sans text-3xl text-center">{category.name}</h2>
                  <ul>
                  {                    
                      tasks.filter((task) => task.category === category.name).map((task) => (
                        
                        <li key={task.id}>
                          <TaskComponent {...task} />
                        </li>
                      ))                    
                  }
                  </ul>
                </li>
              ))
            }
          </ul>  
        </main>
    </>
  )
}
