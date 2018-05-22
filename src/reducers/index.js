import {combineReducers} from 'redux';
import PortfolioItems from './reducer_portfolio_items';
import { reducer as reduxFormReducer } from 'redux-form';
import FormResponse from './reducer_form_submission';

const rootReducer = combineReducers({
	portfolio_items: PortfolioItems,
	form: reduxFormReducer,
	form_response: FormResponse
});

export default rootReducer;