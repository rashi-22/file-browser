import {
    GET_DATA
} from '../actions/actionConstants';

const initialState = {
    loading: false,
    data: [],
    err: {}
}

const fileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
            return {
                loading: false,
                data: action.payload,
                err: {}
            }
        }
        default:
            return state;
    }
}

export default fileReducer;