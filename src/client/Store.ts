import {observable} from 'mobx';

export interface IStore {
	value: number;
	reset(): void;
}

class Store {
	@observable value = 0;

	public reset() {
		this.value = 0;
	}

	constructor() {
		setInterval(() => this.value++, 1000);
	}
}

export const uiStore : IStore = new Store();