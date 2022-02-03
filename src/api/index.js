import axios from 'axios'

import setAuthHeader from '../services/authentication'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertMovie = payload => api.post(`/movie`, payload, { headers: setAuthHeader() })
export const getAllMovies = () => api.get(`/movies`, { headers: setAuthHeader() })
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload, { headers: setAuthHeader() })
export const deleteMovieById = id => api.delete(`/movie/${id}`, { headers: setAuthHeader() })
export const getMovieById = id => api.get(`/movie/${id}`, { headers: setAuthHeader() })

export const resetPassword = payload => api.post(`/auth/reset-password`, payload)
export const confirmNewPassword = payload => api.post(`/auth/confirm-new-password`, payload)

export const confirmRegistration = payload => api.post(`/auth/confirm-registration`, payload)

export const addedUser = payload => api.post(`/auth/registration`, payload)
export const loginUser = payload => api.post(`/auth/login`, payload)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
    resetPassword,
    confirmNewPassword,
    confirmRegistration,
    addedUser,
    loginUser,

}

export default apis
