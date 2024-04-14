import createTask from "./taskOfTodo";

const createTodo = (
  title = "",
  description = "",
  priority = "low",
  dueDate = null
) => {
  let todoElements = [];
  let id;

  const task = createTask(title);

  const add = (task) => {
    todoElements.push(task);
  };

  const remove = (task) => {
    const taskIndex = getIndexOf(task);
    console.log(`taskIndex ${taskIndex}`);

    todoElements.splice(taskIndex, 1);
  };

  const getIndexOf = (targetTask) => {
    const targetTaskId = targetTask.getId();
    console.log(`targetTaskId ${targetTaskId}`);
    const matchId = (taskInList) => {
      const id = taskInList.getId();
      return id === targetTaskId;
    };

    return todoElements.findIndex(matchId);
  };

  const getLst = () => todoElements;

  const changeDescription = (newDescription) => {
    description = newDescription;
  };
  const changeDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const changePriority = (newPriority) => {
    priority = newPriority;
  };

  const getDescription = () => description;
  const getPriority = () => priority;
  const getDueDate = () => dueDate;

  return Object.assign({}, task, {
    add,
    remove,
    changeDescription,
    changeDueDate,
    changePriority,
    getDescription,
    getPriority,
    getDueDate,
    getLst,
  });
};

export default createTodo;
