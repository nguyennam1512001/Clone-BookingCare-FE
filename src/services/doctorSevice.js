import axios from "../axios"


const getDoctors = (data)=>{
    return axios.get(`/api/doctors?limit=${data.limit}&pageNumber=${data.pageNumber}`)
}

const getAllDoctors = ()=>{
    return axios.get(`/api/all-doctors`)
}

const saveInforDoctorSevice = (data)=>{
    return axios.post(`/api/save-infor-doctor`, data)
}

export {getDoctors, getAllDoctors, saveInforDoctorSevice}
