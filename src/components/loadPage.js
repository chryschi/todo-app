const loadPage = () => {
  const exampleList = ["Gardening", "Music Production"];
  const todoList = [
    "clean up",
    "go to work",
    "make homework",
    "water the plants",
  ];

  const navAddButton = document.querySelector(".nav_add-todo_button");
  // navAddButton.addEventListener(click, )

  //load project buttons to the nav
  const navList = document.querySelector(".nav_project-list");
  for (let i = 0; i < exampleList.length; i++) {
    const navListElement = document.createElement("li");
    navList.appendChild(navListElement);

    const button = document.createElement("button");
    button.textContent = exampleList[i];
    navListElement.appendChild(button);
  }

  const mainContainer = document.querySelector("main");

  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Inbox";
  mainContainer.appendChild(pageTitle);

  // load list of todos
  const listOfTodosContainer = document.createElement("ul");
  listOfTodosContainer.classList.add("main_project-list");
  mainContainer.appendChild(listOfTodosContainer);

  for (let i = 0; i < todoList.length; i++) {
    const todoListElement = document.createElement("li");
    todoListElement.classList.add("project_todo");
    listOfTodosContainer.appendChild(todoListElement);

    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    todoListElement.appendChild(todoContainer);

    //load unchecked circle of todo
    const uncheckedButton = document.createElement("button");
    todoContainer.appendChild(uncheckedButton);

    const uncheckedIcon = document.createElement("span");
    uncheckedIcon.classList.add("material-symbols-outlined");
    uncheckedIcon.textContent = "radio_button_unchecked";
    uncheckedButton.appendChild(uncheckedIcon);

    const todoTitle = document.createElement("p");
    todoTitle.textContent = todoList[i];
    todoContainer.appendChild(todoTitle);

    //load property icons of todo
    const todoIconContainer = document.createElement("div");
    todoIconContainer.classList.add("list_item_icon-container");
    todoContainer.appendChild(todoIconContainer);

    const timeLeftBanner = document.createElement("div");
    timeLeftBanner.classList.add("time_left");
    todoIconContainer.appendChild(timeLeftBanner);

    const clockIcon = document.createElement("span");
    clockIcon.classList.add("material-symbols-outlined");
    clockIcon.textContent = "schedule";
    timeLeftBanner.appendChild(clockIcon);

    timeLeftBanner.textContent = "2 months left";

    const downArrowButton = document.createElement("button");
    todoIconContainer.appendChild(downArrowButton);

    const downArrowIcon = document.createElement("span");
    downArrowIcon.classList.add("material-symbols-outlined");
    downArrowIcon.textContent = "keyboard_arrow_down";
    downArrowButton.appendChild(downArrowIcon);

    const optionsButton = document.createElement("button");
    optionsButton.classList.add("list_item_options_icon-container");
    todoContainer.appendChild(optionsButton);

    const optionsIcon = document.createElement("span");
    optionsIcon.classList.add("material-symbols-outlined");
    optionsIcon.textContent = "more_horiz";
    optionsButton.appendChild(optionsIcon);
  }
};

export default loadPage;
