const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'nothing yet':
            return {
                ...state,
                test: action.payload.test
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
        case 'updateReallyWrong': 
            return {
                ...state,
                data: state.data.push(action.payload.value)
            }
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
