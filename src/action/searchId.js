import {FETCH_REQUEST_ID ,FETCH_RECEIVE_ID,FETCH_ERROR_ID, SEARCH_URL} from '../constants';

export const requestId = () => {
    return {
        type: FETCH_REQUEST_ID
    }
}
export const receiveId = (payload) => {
    return {
        type: FETCH_RECEIVE_ID,
        status: 'success',
        payload
    }
}
export const errorId = (error) => {
    return {
        type: FETCH_ERROR_ID,
        status: 'error',
        error
    }
}

export function loadId() {
    return function (dispatch)  {
dispatch(requestId())

return fetch(SEARCH_URL)
.then(response => {
   
    if(response.ok ) {
        return response.json()
    }else {
        throw new Error('Something went wrong')
    }
})
.then(json => dispatch(receiveId(json)))
.catch(e => dispatch(errorId(e)))
    }
}