import actionTypes from "./actionTypes";
import { createNewUserSevice, getAllCodeSevice } from "../../services/userSevice";


// get allcode
const fetchCodeStart = (codeType, successAction, failAction) => {
  return async (dispatch) => {
    try {
        dispatch({type: actionTypes.FETCH_GENDER_START})
      let res = await getAllCodeSevice(codeType);
      if (res && res.errCode === 0) {
        dispatch(successAction(res.data));
      } else {
        dispatch(failAction());
      }
    } catch (e) {
      dispatch(failAction());
      console.log(`Error fetching ${codeType}:`, e);
    }
  };
};

export const fetchGenderStart = () => fetchCodeStart( "gender", fetchGenderSuccess, fetchGenderFail);
export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});
export const fetchGenderFail = () => ({
  type: actionTypes.FETCH_GENDER_FAIL,
});

export const fetchPositionStart = () => fetchCodeStart("position", fetchPositionSuccess, fetchPositionFail);
export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});
export const fetchPositionFail = () => ({
  type: actionTypes.FETCH_POSITION_FAIL,
});

export const fetchRoleStart = () => fetchCodeStart( "role", fetchRoleSuccess, fetchRoleFail);
export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});
export const fetchRoleFail = () => ({
  type: actionTypes.FETCH_ROLE_FAIL,
});

// create user
export const createNewUser = (data)=>{
  return async(dispatch, getState)=>{
    try {
      // dispatch({type: actionTypes.CREATE_USER_SUCCESS})
      let res = await createNewUserSevice(data)
      console.log(res);
      if(res && res.errCode === 0){
        dispatch(saveUserSuccess())
      }else{
        dispatch(saveUserFail())
      }
    } catch (e) {
      dispatch(saveUserFail())
      console.log(e);
    }
  }
}
export const saveUserSuccess =()=>({
  type: 'CREATE_USER_SUCCESS'
})
export const saveUserFail =()=>({
  type: 'CREATE_USER_FAIL'
})