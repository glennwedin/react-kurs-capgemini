import { combineReducers } from 'redux'

const reducer = (state = {}, action) => {
	switch(action.type) {
		case 'nothing yet':
			return {
				...state,
				test: action.payload.test
			}
		default:
			return state;
	}
}

const mainReducer = combineReducers({
	reducer
});

export default mainReducer;