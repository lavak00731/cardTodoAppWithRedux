export enum statusEnum {
    notStarted = "Not Started",
    inProgress = "In Progress",
    done = "Done"
}

interface TaskType {
    id: string,
    name: string,
    initDate: string,
    dueDate: string,
    category: string,
    comment: string,
    tags: string[],
    url: string,
    status: statusEnum;
}
export default TaskType;