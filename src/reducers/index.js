import {combineReducers} from 'redux';
import PortfolioItems from './reducer_portfolio_items';

const rootReducer = combineReducers({
	portfolio_items: PortfolioItems
});

export default rootReducer;