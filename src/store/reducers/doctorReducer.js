import actionTypes from '../actions/actionTypes';

const initialState = {
    listDoctor: [],
    listAllDoctor: [],
    inforDetailDoctor: [],
    doctorToastMessage: '',
    doctorToastMessageErr: '',
    reset: true,
    listDetailDoctor: []
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
        case actionTypes.FETCH_DETAIL_DOCTOR_SUCCESS: 
            return {
                ...state,
                inforDetailDoctor: action.data
            }
        case actionTypes.FETCH_DETAIL_DOCTOR_FAIL: 
            return {
                ...state,
                inforDetailDoctor: []
            }
        case actionTypes.SAVE_INFOR_DOCTOR_SUCCESS: 
            return {
                ...state,
                reset: true
            }
        case actionTypes.SAVE_INFOR_DOCTOR_FAIL: 
            return {
                ...state,
                reset: false
            }
        case actionTypes.UPDATE_DETAIL_DOCTOR_SUCCESS: 
            return {
                ...state,
                reset: true
            }
        case actionTypes.UPDATE_DETAIL_DOCTOR_FAIL: 
            return {
                ...state,
                reset: false
            }
        case actionTypes.FETCH_ALL_DETAIL_DOCTOR_SUCCESS: 
            return {
                ...state,
                listDetailDoctor: action.data
            }
        case actionTypes.FETCH_ALL_DETAIL_DOCTOR_FAIL: 
            return {
                ...state,
                listDetailDoctor: []
            }
        default:
            return state;
    }
}

export default doctorReducer;