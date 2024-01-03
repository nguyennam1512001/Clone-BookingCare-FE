import axios from "../axios"

const handleLoginAPI =(email, password)=>{
    return axios.post('/api/login', {email, password})
}

const getUsers = (inputId)=>{
    return axios.get(`/api/users?id=${inputId}`)
}

const createNewUserSevice = (data)=>{
    return axios.post('/api/create-user', data)
}

const updateUserSevice = (data)=>{
    return axios.put(`/api/edit-user`, data)
}

const deleteUserSevice = (id)=>{
    return axios.delete(`/api/delete-user/${id}`)
}

const getAllCodeSevice = (type)=>{
    return axios.get(`/api/allcode?type=${type}`)
}

export {handleLoginAPI, getUsers, createNewUserSevice,updateUserSevice, deleteUserSevice, getAllCodeSevice}