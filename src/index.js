import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();