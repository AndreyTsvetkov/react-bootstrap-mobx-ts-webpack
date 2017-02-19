import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Tasks } from './Tasks';
import { Store } from './Store';

const store = new Store();

ReactDOM.render(<Tasks store={store}/>, document.getElementById('root'));