import {FETCH_REQUEST_ID,FETCH_RECEIVE_ID,FETCH_ERROR_ID} from '../constants';

const initialState = {
  isFetching: false,
  isError: false,
  searchId: null,
};

const searchId = (state = initialState, action) => {
 
  switch (action.type) {
    case FETCH_REQUEST_ID:
      return { ...state, isFetching: true };
      case FETCH_RECEIVE_ID:
        return {...state,isFetching:false,searchId: action.payload}  
        case FETCH_ERROR_ID:
return {...state,isError:true}
    default:
      return state;
  }
};
export default searchId;
