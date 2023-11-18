import axios from "../axios"

const handleLoginAPI =(email, password)=>{
    return axios.post('/api/login', {email, password})
}

const getUsers = (inputId)=>{
    return axios.get(`/api/users?id=${inputId}`)
}

export {handleLoginAPI, getUsers}