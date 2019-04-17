import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ForumApp from './ForumApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ForumApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();