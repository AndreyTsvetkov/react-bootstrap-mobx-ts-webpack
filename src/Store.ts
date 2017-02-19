import { action, observable } from 'mobx';

export class Store {
    @action public addNew = (name: string) => {
        this.tasks.unshift(new Task(name));
    }

    @observable public tasks: Task[] = [];
}

export class Task {
    
    constructor (public name: string) {

    }

    public start = () => {
        this.isRunning = true;
    }
    public stop = () => {
        this.isRunning = false;
    }

    public timeTaken = () => "1m";
    @observable public isRunning = true;
}