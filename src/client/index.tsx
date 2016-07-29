import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Block} from './Block';
import {uiStore} from './Store';

ReactDOM.render(
	<Block store={uiStore} />, 
	document.getElementById('root')
);