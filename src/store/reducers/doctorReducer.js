import actionTypes from '../actions/actionTypes';

const initialState = {
    listDoctor: [],
    listAllDoctor: [],
    doctorToastMessage: '',
    doctorToastMessageErr: ''
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
        case actionTypes.FETCH_ALL_DOCTOR_SUCCESS: 
            return {
                ...state,
                listAllDoctor: action.data
            }
        case actionTypes.FETCH_ALL_DOCTOR_FAIL: 
            return {
                ...state,
                listAllDoctor: []
            }
        case actionTypes.SAVE_INFOR_DOCTOR_SUCCESS: 
            return {
                ...state,
                doctorToastMessage: action.data,
                doctorToastMessageErr: ''
            }

        default:
            return state;
    }
}

export default doctorReducer;