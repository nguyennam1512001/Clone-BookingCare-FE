import actionTypes from "./actionTypes";
import { getDoctors, getAllDoctors , saveInforDoctorSevice} from "../../services/doctorSevice";
import { toast } from 'react-toastify';



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
  

export const fetchAllDoctorStart = ()=>{
    return async(dispatch, getState)=>{
      try {
        let res = await getAllDoctors()
        if(res && res.response.errCode === 0){
          dispatch(fetchAllDoctorSuccess(res.response.data.reverse()))
        }else{
          dispatch(fetchAllDoctorFail(res.errMessage))
        }
      } catch (e) {
        dispatch(fetchAllDoctorFail(e.message))
        console.log(e);
      }
    }
  }
  export const fetchAllDoctorSuccess =(data)=>({
    type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
    data: data
  })
  export const fetchAllDoctorFail =(errMessage)=>({
    type: actionTypes.FETCH_ALL_DOCTOR_FAIL,
    data: errMessage
  })

export const saveInforDoctorStart = (data)=>{
  return async(dispatch, getState)=>{
      try {
        let res = await saveInforDoctorSevice(data)
        if(res && res.response.errCode === 0){
          toast.success(res.response.message)
          dispatch(saveInforDoctorSuccess(res.response.message))
        }else{
          toast.error(res.response.errMessage)
          dispatch(saveInforDoctorFail(res.response.errMessage))
        }
      } catch (e) {
        toast.error(e.message)
        dispatch(saveInforDoctorFail(e.message))
        console.log(e);
      }
    }
  }
  export const saveInforDoctorSuccess =(message)=>({
    type: actionTypes.SAVE_INFOR_DOCTOR_SUCCESS,
    data: message
  })
  export const saveInforDoctorFail =(errMessage)=>({
    type: actionTypes.SAVE_INFOR_DOCTOR_FAIL,
    data: errMessage
  })
