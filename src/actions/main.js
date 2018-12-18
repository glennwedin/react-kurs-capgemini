export const FETCHING_ACCOUNT = 'FETCHING_ACCOUNT';
export const SETTING_ACCOUNT = 'SETTING_ACCOUNT';

export function fetchingAccountInfo() {
    return {
        type: FETCHING_ACCOUNT,
        done: false
    };
}

export function setAccount(res) {
    return {
        type: SETTING_ACCOUNT,
        done: true,
        payload: res
    };
}

export function fetchAccount() {
    return dispatch => {
        dispatch(fetchingAccountInfo());
        fetch('https://europe-west1-capdemo-b4810.cloudfunctions.net/bankkonto')
            .then(res => res.json())
            .then(result => {
                dispatch(setAccount(result));
            });
    };
}
