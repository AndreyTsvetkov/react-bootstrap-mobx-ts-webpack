import { action, observable } from 'mobx';

export class Store {
    @action public addNew = (name: string) => {
        this.tasks.unshift(new Task(name));
    }

    @observable public tasks: Task[] = [];
}

export class Task {
    private timeoutHandle: number | null = null;
    constructor (public name: string) {
        this.start();
    }

    public start = () => {
        this.isRunning = true;
        this.timeoutHandle = setInterval(() => this.timeTaken++, 1000);
    }
    public stop = () => {
        this.isRunning = false;
        if (this.timeoutHandle) {
            clearInterval(this.timeoutHandle);
        }
    }

    @observable public timeTaken: number = 0;
    @observable public isRunning = true;
}