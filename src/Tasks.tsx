import * as React from 'react';
import { action, observable, computed, autorun, reaction } from 'mobx';
import { observer } from 'mobx-react';
import { Panel, ButtonGroup, Button, Label, Row, Col, FormControl } from 'react-bootstrap';
import { /*I{Entity}View*/ } from '../../Shared/Contracts';
import { Store } from './Store';

type Props = {
    store: Store;
};

@observer
export class Tasks extends React.Component<Props, {}> {
    constructor(p: Props) {
        super(p);
    }

    public render() {
        const header = (
            <Row>
                <Col xs={11}><FormControl type="text" placeholder="Введите задачу" /></Col>
                <Col xs={1}><Button>+</Button></Col>
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