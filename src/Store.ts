export class Store {
    public tasks: Task[] = [ new Task('task 1'), new Task('task 2') ];
}

export class Task {
    constructor (public name: string) {}
    public timeTaken = () => "1m";
}