import {observable} from 'mobx';

export interface IStore {
	value: number;
}

class Store {
	@observable value = 0;

	constructor() {
		setInterval(() => this.value++, 1000);
	}
}

export const uiStore = new Store();