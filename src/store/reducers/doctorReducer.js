import actionTypes from '../actions/actionTypes';

const initialState = {
    listDoctor: []
}

const doctorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DOCTOR_SUCCESS: 
            return {
                ...state,
                listDoctor: action.data
            }
        case actionTypes.FETCH_DOCTOR_FAIL: 
            return {
                ...state,
                listDoctor: []
            }
        default:
            return state;
    }
}

export default doctorReducer;