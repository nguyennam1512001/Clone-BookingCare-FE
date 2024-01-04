import actionTypes from "./actionTypes";
import { getAllCodeSevice } from "../../services/userSevice";

const fetchCodeStart = (codeType, successAction, failAction) => {
  return async (dispatch) => {
    try {
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

export const fetchGenderStart = () =>
  fetchCodeStart(
    "gender",
    fetchGenderSuccess,
    fetchGenderFail
  );

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFail = () => ({
  type: actionTypes.FETCH_GENDER_FAIL,
});

export const fetchPositionStart = () =>
  fetchCodeStart(
    "position",
    fetchPositionSuccess,
    fetchPositionFail
  );

export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});

export const fetchPositionFail = () => ({
  type: actionTypes.FETCH_POSITION_FAIL,
});

export const fetchRoleStart = () =>
  fetchCodeStart(
    "role",
    fetchRoleSuccess,
    fetchRoleFail
  );

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});

export const fetchRoleFail = () => ({
  type: actionTypes.FETCH_ROLE_FAIL,
});
