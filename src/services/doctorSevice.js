import axios from "../axios"


const getDoctors = (data)=>{
    return axios.get(`/api/doctors`,{params: data})
}

export {getDoctors}
