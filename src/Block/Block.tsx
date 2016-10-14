import * as React from 'react';
import { observer } from 'mobx-react';
import { Panel, Button } from 'react-bootstrap'; 
import { IStore } from '../Store';

require<any>('./Block.less');

@observer
export class Block extends React.Component<{store: IStore}, {}> {
	private onReset = () => 
		this.props.store.reset();

	public render() {
		const button = <Button onClick={this.onReset}>Reset</Button>
		return (
			<Panel className="Block" header="I am a React+MobX app"
				footer={button}>
				And here is my counter: {this.props.store.value} 
			</Panel>
		);
	}
}