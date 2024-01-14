import actionTypes from "./actionTypes";
import { getDoctors } from "../../services/doctorSevice";



export const fetchDoctorStart = (data)=>{
    return async(dispatch, getState)=>{
      try {
        let res = await getDoctors(data)
        if(res && res.response.errCode === 0){
          dispatch(fetchDoctorSuccess(res.response.data.reverse()))
        }else{
          dispatch(fetchDoctorFail(res.errMessage))
        }
      } catch (e) {
        dispatch(fetchDoctorFail(e.message))
        console.log(e);
      }
    }
  }
  export const fetchDoctorSuccess =(data)=>({
    type: actionTypes.FETCH_DOCTOR_SUCCESS,
    data: data
  })
  export const fetchDoctorFail =(errMessage)=>({
    type: actionTypes.FETCH_DOCTOR_FAIL,
    data: errMessage
  })
  