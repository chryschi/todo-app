import createTodo from "./components/todo";
import createTask from "./components/taskOfTodo";
import createProject from "./components/project";

console.log("HI!");

//create default project
const defaultProject = createProject("defaul project");
console.log(`${defaultProject.getTitle()}: `);
console.log(defaultProject.getLst());
console.log(`${defaultProject.getLst().length} todo(s) in this project`);

//create first todo and show TodoElements of that todo
const firstTodo = createTodo("clean");
console.log(`todo: ${firstTodo.getTitle()} `);
console.log(firstTodo.getLst());

//add first todo to project and show project
console.log("add todo to project");
defaultProject.add(firstTodo);
console.log(`${defaultProject.getTitle()}: `);
console.log(defaultProject.getLst());
console.log(`${defaultProject.getLst().length} todo(s) in this project`);

//create first task and show properties
const task = createTask("prepare utensils");
console.log(`task: ${task.getTitle()}`);
console.log(`task completed?: ` + task.getCompleteState());
console.log("check task");
task.toggleCompleteState();
console.log(`task completed?: ` + task.getCompleteState());
console.log("check task");
task.toggleCompleteState();
console.log(`task completed?: ` + task.getCompleteState());

//set ids for task in respect of todo list
console.log(`initial id of task: ${task.getId()}`);
task.setId(firstTodo);
console.log(`id of task: ` + task.getId());

//add task to todo and todo TodoElements
console.log("add task to todo");
firstTodo.add(task);
console.log(`${firstTodo.getTitle()}: `);
console.log(firstTodo.getLst().map((task) => task.getTitle()));
console.log(`${firstTodo.getLst().length} task(s) in this todo`);

// const secondTask = createTask("clean toilet");
// secondTask.setTaskId(todo);
// todo.add(secondTask);
// console.log(`Id of task 2: ${secondTask.getId()}`);
// console.log(todo.getChecklist());
// console.log(todo.getChecklist().length);

// todo.remove(task);
// console.log(todo.getChecklist().length);
// console.log(todo.getChecklist()[0], todo.getChecklist()[1]);

// const thirdTask = createTask("clap your hands really hard and laugh out loud");
// thirdTask.setTaskId(todo);
// todo.add(thirdTask);
// console.log(`Id of Third Task: ${thirdTask.getId()}`);
// console.log(`Id of Second Task: ${secondTask.getId()}`);
// console.log(todo.getChecklist());
