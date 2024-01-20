import actionTypes from "./actionTypes";
import { getDoctors, getAllDoctors , saveInforDoctorSevice, getDetailDoctor, updateDetailDoctor, getAllDetailDoctor} from "../../services/doctorSevice";
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
          dispatch(fetchAllDetailDoctorStart())
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
  export const saveInforDoctorFail =()=>({
    type: actionTypes.SAVE_INFOR_DOCTOR_FAIL,
  })

  export const fetchDetailDoctorStart =(id)=>{
    return async(dispatch, getState)=>{
      try {
        let res = await getDetailDoctor(id);
        if (res && res.errCode === 0) {
          dispatch(fetchDetailDoctorSuccess(res.data))
        } else {
          dispatch(fetchDetailDoctorFail(res.errMessage))
        }
      } catch (e) {
        console.log(e);
        dispatch(fetchDetailDoctorFail(e.message))
      }
    }
  }
  export const fetchDetailDoctorSuccess=(message)=>({
    type: actionTypes.FETCH_DETAIL_DOCTOR_SUCCESS,
    data: message
  })
  export const fetchDetailDoctorFail=(errMessage)=>({
    type: actionTypes.FETCH_DETAIL_DOCTOR_FAIL,
    data: errMessage
  })

  export const fetchAllDetailDoctorStart =()=>{
    return async(dispatch, getState)=>{
      try {
        let res = await getAllDetailDoctor();
        if (res && res.errCode === 0) {
          dispatch(fetchAllDetailDoctorSuccess(res.data))
        } else {
          dispatch(fetchAllDetailDoctorFail(res.errMessage))
        }
      } catch (e) {
        console.log(e);
        dispatch(fetchDetailDoctorFail(e.message))
      }
    }
  }
  export const fetchAllDetailDoctorSuccess=(data)=>({
    type: actionTypes.FETCH_ALL_DETAIL_DOCTOR_SUCCESS,
    data: data
  })
  export const fetchAllDetailDoctorFail=(errMessage)=>({
    type: actionTypes.FETCH_ALL_DETAIL_DOCTOR_FAIL,
    data: errMessage
  })

  export const updateDetailDoctorStart =(data)=>{
    console.log(data);
    return async(dispatch, getState)=>{
      try {
        let res = await updateDetailDoctor(data);
        if (res && res.errCode === 0) {
          toast.success(res.message)
          dispatch(updateDetailDoctorSuccess(res.data))
          dispatch(fetchAllDetailDoctorStart())
        } else {
          toast.error(res.errMessage)
          dispatch(updateDetailDoctorFail(res.errMessage))
        }
      } catch (e) {
        console.log(e);
        dispatch(updateDetailDoctorFail(e.message))
      }
    }
  }
  export const updateDetailDoctorSuccess=(message)=>({
    type: actionTypes.UPDATE_DETAIL_DOCTOR_SUCCESS,
    data: message
  })
  export const updateDetailDoctorFail=(errMessage)=>({
    type: actionTypes.UPDATE_DETAIL_DOCTOR_FAIL,
    data: errMessage
  })
