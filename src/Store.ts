import { action, observable } from 'mobx';

export class Store {
    @action public addNew = (name: string) => {
        this.tasks.unshift(new Task(name));
    }

    @observable public tasks: Task[] = [];
}

export class Task {
    constructor (public name: string) {}
    public timeTaken = () => "1m";
    public isRunning = () => true;
}