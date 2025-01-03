import { useSelector } from "react-redux";
import RootState from "../Interfaces/RootState";
import CategoryType from "../Interfaces/CategoryType";
import TaskType from "../Interfaces/TasksType";

export const MainComp = () => {

  const tasks = useSelector((store: RootState) => store.tasks.items as TaskType[]);
  const categories = useSelector((store: RootState) => store.categories.items as CategoryType[]);

  console.log(tasks)
  return (
    <>
        <main className="container mx-auto bg-white p-2" aria-labelledby="mainTitle">
          <h1 className="font-mono text-6xl mb-4">Tasks</h1>
          <ul className="flex flex-row align-top justify-between">
            {
              categories && categories.map((category) => (
                <li key={category.id}>
                  <h2 className="font-sans text-3xl">{category.name}</h2>
                </li>
              ))
            }
          </ul>  
        </main>
    </>
  )
}
