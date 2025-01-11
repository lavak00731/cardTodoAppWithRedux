import TaskType from "../Interfaces/TasksType"
export const TaskComponent = ({name, initDate, dueDate, comment, tags, url, status}:TaskType) => {
    console.log(tags)
  return (
    <section className="max-w-sm rounded overflow-hidden shadow-lg"> 
        <div className="px-6 py-4">
            <h3 className="font-bold text-xl pb-2 border-b-2 border-gray-600">{name}</h3>
            <p className="text-black py-2"><span className="font-bold">Init Date</span> {initDate}</p>
            <p className="text-black py-2"><span className="font-bold">Due Date</span> {dueDate}</p>
            <p className="text-black py-2 text-base border-t-2 border-gray-600">
                {comment}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            {tags.map((tag) => (
                <span key={tag+Date.now} className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-yellow-200 mr-2 mb-2">
                    #{tag}
                </span>
            ))}            
        </div>
    </section>
  )
}
