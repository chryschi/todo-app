import "./style.css";

import createTodo from "./components/todo";
import createTask from "./components/taskOfTodo";
import createProject from "./components/project";

import loadPage from "./components/loadPage";

// console.log("HI!");

// //create default project
// const defaultProject = createProject("defaul project");
// console.log(`${defaultProject.getTitle()}: `);
// console.log(defaultProject.getLst());
// console.log(`${defaultProject.getLst().length} todo(s) in this project`);

// //create first todo and show TodoElements of that todo
// const firstTodo = createTodo("clean");
// console.log(`todo: ${firstTodo.getTitle()} `);
// console.log(firstTodo.getLst());

// //add first todo to project and show project
// console.log("add todo to project");
// defaultProject.add(firstTodo);
// console.log(`${defaultProject.getTitle()}: `);
// console.log(defaultProject.getLst());
// console.log(`${defaultProject.getLst().length} todo(s) in this project`);

// //create first task and show properties
// const task = createTask("prepare utensils");
// console.log(`task: ${task.getTitle()}`);
// console.log(`task completed?: ` + task.getCompleteState());
// console.log("check task");
// task.toggleCompleteState();
// console.log(`task completed?: ` + task.getCompleteState());
// console.log("check task");
// task.toggleCompleteState();
// console.log(`task completed?: ` + task.getCompleteState());

// //set ids for task in respect of todo list
// console.log(`initial id of task: ${task.getId()}`);
// task.setId(firstTodo);
// console.log(`id of task: ` + task.getId());

// //add task to todo
// console.log("add task to todo");
// firstTodo.add(task);
// console.log(`${firstTodo.getTitle()}: `);
// console.log(firstTodo.getLst().map((task) => task.getTitle()));
// console.log(`${firstTodo.getLst().length} task(s) in this todo`);

// //add second task to todo
// const secondTask = createTask("clean toilet");
// console.log(`initial id of second task: ${secondTask.getId()}`);
// secondTask.setId(firstTodo);
// firstTodo.add(secondTask);
// console.log(`Id of second task: ${secondTask.getId()}`);
// console.log(firstTodo.getLst());
// console.log("amount of elements in todo list: " + firstTodo.getLst().length);

// //remove first task of todo list
// firstTodo.remove(task);
// console.log("amount of elements in todo list: " + firstTodo.getLst().length);
// console.log(firstTodo.getLst()[0], firstTodo.getLst()[1]);
// console.log(`Id of remaining task: ${secondTask.getId()}`);

loadPage();
