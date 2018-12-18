import { FETCHING_ACCOUNT, SETTING_ACCOUNT } from '../actions/main';

const initialState = {
    done: true
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_ACCOUNT:
            return {
                ...state,
                done: action.done
            };
        case SETTING_ACCOUNT:
            return {
                ...state,
                done: action.done,
                profil: action.payload.profil
            };
        default:
            return state;
    }
};

export default reducer;

/*
const initial = {
    data: []
};
const reducer = (state = initial, action) => {
    switch (action.type) {
        
        case 'insertToArray':
            return {
                ...state,
                data: [
                    ...state.data.slice(0, action.payload.index),
                    action.payload.value,
                    ...state.data.slice(action.index)
                ]
            };
        case 'updateArray':
            return {
                ...state,
                data: state.data.map((item, index) => {
                    if (index !== action.index) {
                        return item;
                    }
                    return {
                        ...item,
                        ...action.item
                    };
                })
            };
        case 'removeFromArray':
            return {
                ...state,
                data: state.data.filter((item, index) => {
                    if (index === action.index) {
                        return false;
                    }
                    return true;
                })
            };
        case 'updatVeryNestedFieldInObject': {
            return {
                ...state,
                first: {
                    ...state.first,
                    second: {
                        ...state.first.second,
                        [action.someId]: {
                            ...state.first.second[action.someId],
                            fourth: action.someValue
                        }
                    }
                }
            };
        }
        default:
            return state;
    }
};
*/
