import * as React from 'react';
import { action, observable, computed, autorun, reaction } from 'mobx';
import { observer } from 'mobx-react';
import { Panel, ButtonGroup, Button, Label, Row, Col, FormControl } from 'react-bootstrap';
import { Store } from './Store';

type Props = {
    store: Store;
};

@observer
export class Tasks extends React.Component<Props, {}> {
    constructor(p: Props) {
        super(p);
    }

    @action private newTaskNameChanged = (e: any) => 
        this.newTaskName = e.target.value;
    @observable private newTaskName = "";

    @action private onCreate = () => {
        this.props.store.addNew(this.newTaskName);
        this.newTaskName = '';
    }

    public render() {
        const header = (
            <Row>
                <Col xs={11}>
                    <FormControl type="text" placeholder="Введите задачу" value={this.newTaskName} onChange={this.newTaskNameChanged}/>
                </Col>
                <Col xs={1}>
                    <Button onClick={this.onCreate}>+</Button>
                </Col>
            </Row>
        );
        return (
            <Panel header={header}>
                {this.props.store.tasks.map((task, index) => (
                    <div key={index}>
                        {task.name}: {task.timeTaken()}
                    </div>
                ))}
            </Panel>
        );
    }
} 