import { TodoItem } from './todoItem.js';
import { TodoCollection } from './todoCollection.js';
import inquirer from 'inquirer';
let todos = [
    new TodoItem(1, 'Buy Flowers'),
    new TodoItem(2, 'Get Shoes'),
    new TodoItem(3, 'Collect Tickets'),
    new TodoItem(4, 'Call Joe', true),
];
let collection = new TodoCollection('Adam', todos);
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List ` +
        `(${collection.getItemCounts().incomplete} items to do)`);
    // collection.getTodoItems(true).forEach((item) => item.printDetails());
    collection.getTodoItems(showCompleted).forEach((item) => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer
        .prompt({ type: 'input', name: 'add', message: 'Enter task:' })
        .then((answers) => {
        if (answers['add'] !== '') {
            collection.addTodo(answers['add']);
        }
        promptUser();
    });
}
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer
        .prompt({
        type: 'list',
        name: 'command',
        message: 'Choose option',
        choices: Object.values(Commands),
        // badProperty: true,
    })
        .then((answers) => {
        switch (answers['command']) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
        }
    });
}
promptUser();
