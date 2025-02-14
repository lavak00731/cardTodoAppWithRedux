import { useSelector } from "react-redux";
import RootState from "../Interfaces/RootState";
import CategoryType from "../Interfaces/CategoryType";
import TaskType from "../Interfaces/TasksType";
import { TaskComponent } from "./TaskComponent";

export const MainComp = () => {
  
  const tasks = useSelector((store: RootState) => store.tasks.items as TaskType[]);
  const categories = useSelector((store: RootState) => store.categories.items as CategoryType[]);
  

  /*
    trello.com/?tarea=120 o trello.com/120
  */
    console.log(tasks)
    
  if(!categories && !tasks) {
    return <p>Loading...</p>
  }
  return (
    <>
        <main className="container mx-auto bg-white p-2 rounded-t-lg" aria-labelledby="mainTitle">
          <h1 className="font-mono text-6xl mb-4">Dashboard</h1>
          <ul className="flex flex-col gap-6 justify-between divide-y-2 divide-slate-500">
            {
              categories ? categories.map((category) => (
                <li className="basis-70 pt-3 p-2" key={category.id}>
                  <h2 className="font-sans text-3xl text-center">{category.name}</h2>
                  <ul className="flex flex-row gap-3">
                  {                    
                      tasks.filter((task) => task.category === category.name).map((task) => (
                        
                        <li className="basis-3/12" key={task.id}>
                          <TaskComponent {...task} />
                        </li>
                      ))                    
                  }
                  </ul>
                </li>
              )) : null
            }
          </ul>  
        </main>
    </>
  )
}
