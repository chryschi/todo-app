// import createTask from "./checklistTask";

const createTodo = (
  title = "",
  description = "",
  priority = "low",
  dueDate = null,
  completed = false
) => {
  let checklist = [];

  const add = (task) => {
    checklist.push(task);
  };

  const remove = (task) => {
    const taskIndex = getIndexOf(task);
    console.log(`taskIndex ${taskIndex}`);

    checklist.splice(taskIndex, 1);
  };

  const getIndexOf = (targetTask) => {
    const targetTaskId = targetTask.getId();
    console.log(`targetTaskId ${targetTaskId}`);
    const matchId = (taskInList) => {
      const id = taskInList.getId();
      return id === targetTaskId;
    };

    return checklist.findIndex(matchId);
  };

  const getChecklist = () => checklist;

  const changeTitle = (newTitle) => {
    title = newTitle;
  };
  const changeDescription = (newDescription) => {
    description = newDescription;
  };
  const changeDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const changePriority = (newPriority) => {
    priority = newPriority;
  };
  const toggleCompleteState = () => {
    completed = !completed;
  };

  const getTitle = () => title;
  const getDescription = () => description;
  const getPriority = () => priority;
  const getDueDate = () => dueDate;
  const getCompleteState = () => completed;

  return {
    add,
    remove,
    changeTitle,
    changeDescription,
    changeDueDate,
    changePriority,
    toggleCompleteState,
    getTitle,
    getDescription,
    getPriority,
    getDueDate,
    getCompleteState,
    getChecklist,
  };
};

export default createTodo;
