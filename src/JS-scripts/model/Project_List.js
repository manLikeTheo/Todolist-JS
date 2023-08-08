export default class Project_List{
    constructor() {
        this.projectsById = {};
    }

    add(newItem){
        this.projectsById[newItem.id] = newItem;
    }

    get items() {
        return Object.values(this.itemsById);
    }

    getItemsByID(id) {
        return this.projectsById[id];
    }

    removeById(id) {
        delete this.projectsById[id];
    }
}