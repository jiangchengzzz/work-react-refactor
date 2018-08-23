import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app';
import './css/base.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
