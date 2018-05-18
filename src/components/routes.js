import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Resume from './resume';
import Contact from './contact';
import PortfolioList from '../containers/portfolio_list';
import About from './about';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import '../styles/routes.css';

const Routes = props => {
	return (
		<TransitionGroup component='main'>
			<CSSTransition
				classNames='pages'
				key={props.location.pathname}
				timeout={500}
				mountOnEnter={true}
				unmountOnExit={true}>
				<Switch location={props.location}>
					<Route path='/resume' component={Resume} />
					<Route path='/portfolio' component={PortfolioList} />
					<Route path='/contact' component={Contact} />
					<Route path='/' component={About} />
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default withRouter(Routes);