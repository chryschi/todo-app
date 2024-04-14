import createTodo from "./todo";

const createProject = (title = "", description = "", startDate = null) => {
  let todoList = [];

  const { getTitle, changeTitle } = createTodo(title);

  const add = (todo) => {
    todoList.push(todo);
  };

  const getLst = () => todoList;

  return {
    add,
    getLst,
    getTitle,
    changeTitle,
  };
};

export default createProject;
