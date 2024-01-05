import actionTypes from "../actions/actionTypes";

const initialState = {
    isLoadingGender : false,
    genders: [],
    positions: [],
    roles: []
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            return {
                ...state,
                isLoadingGender: true
            };
        case actionTypes.FETCH_GENDER_SUCCESS:
            return {
                ...state,
                genders: action.data,
                isLoadingGender: false
            };
        case actionTypes.FETCH_GENDER_FAIL:
            return {
                ...state,
                isLoadingGender: false
            };
        case actionTypes.FETCH_POSITION_SUCCESS:
            return {
                ...state,
                positions: action.data,
            };
        case actionTypes.FETCH_POSITION_FAIL:
            return {
                ...state,
            };
        case actionTypes.FETCH_ROLE_SUCCESS:
            return {
                ...state,
                roles: action.data,
            };
        case actionTypes.FETCH_ROLE_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default adminReducer;
