import {combineReducers} from 'redux';
import PortfolioItems from './reducer_portfolio_items';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
	portfolio_items: PortfolioItems,
	form: reduxFormReducer
});

export default rootReducer;