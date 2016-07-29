import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import { Panel } from 'react-bootstrap'; 
import {IStore} from './Store';


@observer
export class Block extends React.Component<{store: IStore}, {}> {
	public render() {
		return (
			<Panel header="I am a React+MobX app">
				And here is my counter: {this.props.store.value} 
			</Panel>
		);
	}
}