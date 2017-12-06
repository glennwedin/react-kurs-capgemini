import { combineReducers } from 'redux'

const reducer = (state = {}, action) => {
	switch(action.type) {
		case 'nothing yet':
			return Object.assign({}, state, {
				test: "test"
			});
		default:
			return state;
	}
}

const mainReducer = combineReducers({
	reducer
});

export default mainReducer;