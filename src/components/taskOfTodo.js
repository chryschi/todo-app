import createProject from "./project";

const createTask = (title, completed = false) => {
  let id;

  const getTitle = () => title;

  const changeTitle = (newTitle) => {
    title = newTitle;
  };

  const getCompleteState = () => completed;

  const toggleCompleteState = () => {
    completed = !completed;
  };

  const getId = () => id;

  const setId = (parentObject) => {
    const listOfItems = parentObject.getLst();
    const indexOfLastElement = listOfItems.length - 1;
    let id;

    id =
      listOfItems.length === 0
        ? 0
        : listOfItems[indexOfLastElement].getId() + 1;

    changeId(id);
  };

  const changeId = (newId) => {
    id = newId;
  };

  return {
    toggleCompleteState,
    changeTitle,
    getCompleteState,
    getTitle,
    getId,
    setId,
  };
};

export default createTask;
