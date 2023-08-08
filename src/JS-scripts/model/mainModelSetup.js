import TodoList from "./todoList_Folder";
import Todo_Item from "./todo-items";
import Project_List from "./Project_List";
import Project from "./project";

export default class MainModelSetup {
    constructor() {
        this.todolist = new TodoList();
        this.projectList = new Project_List();
    }

    createAndAddNewTodoItem(name, description, dueDate, project, priority, checkbox) {
        const newTodoItem = new Todo_Item(name, description, dueDate, project, priority, checkbox);
        this.todolist.add(newTodoItem);

        return newTodoItem;
    }

    updateTodoItem(element, name, description, dueDate, project, priority) {
        
    }
}