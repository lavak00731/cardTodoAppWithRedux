enum statusEnum {
    notStarted = "Not Started",
    inProgress = "In Progress",
    done = "Done"
}

interface TaskType {
    id: number,
    name: string,
    initDate: Date,
    dueDate: Date,
    category: string,
    comment: string,
    tags: string[],
    url: string,
    status: statusEnum;
}
export default TaskType;