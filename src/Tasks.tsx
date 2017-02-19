import * as React from 'react';
import { action, observable, computed, autorun, reaction } from 'mobx';
import { observer } from 'mobx-react';
import { Panel, Label, Row, Col, FormControl } from 'react-bootstrap';
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
        return <div>hello world</div>;
    }
} 