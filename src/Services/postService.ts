import TaskType from "../Interfaces/TasksType";

const postService = async (url:string, task: TaskType , signal:AbortSignal) => {
    try {
        const response = await fetch(url, {
            signal,
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        if(response.ok) {
            const data = await response.json();
            return data;
        }        
    } catch (error) {
        console.log(error)
    }
    
}
export default postService;