import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './header';
import Routes from './routes';
import Footer from './footer';

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Routes />
				<Footer />
			</div>
		</Router>
	);
};

export default App;