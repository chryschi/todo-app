import createTodo from "./todo";

const createTask = (title, completed = false) => {
  let id;

  const setTaskId = (todo) => {
    const checklist = todo.getChecklist();
    const indexOfLastElement = checklist.length - 1;
    let id;

    id = checklist.length === 0 ? 0 : checklist[indexOfLastElement].getId() + 1;

    changeId(id);
  };

  const changeId = (newId) => {
    id = newId;
  };

  const getId = () => id;

  const { toggleCompleteState, changeTitle, getCompleteState, getTitle } =
    createTodo(title);

  return {
    title,
    toggleCompleteState,
    changeTitle,
    getCompleteState,
    getTitle,
    setTaskId,
    getId,
  };
};

export default createTask;
