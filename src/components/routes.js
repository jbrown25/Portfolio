import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Resume from './resume';
import Contact from './contact';
import Portfolio from './portfolio';
import About from './about';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import '../styles/routes.css';

const Routes = props => {
	return (
		<TransitionGroup component='main'>
			<CSSTransition
				classNames='sections'
				key={props.location.pathname}
				timeout={500}
				mountOnEnter={true}
				unmountOnExit={true}>
				<Switch location={props.location}>
					<Route path='/resume' component={Resume} />
					<Route path='/portfolio' component={Portfolio} />
					<Route path='/contact' component={Contact} />
					<Route path='/' component={About} />
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default withRouter(Routes);