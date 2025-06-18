import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL + '/user';

export function getUserList() {
    return axios.get(`${API_URL}`);
}
export function createUser(data) {
    return axios.post(`${API_URL}`,data);
}
export function updateUserById(id,data) {
    return axios.put(`${API_URL}/${id}`,data);
}
export function deleteUserById(id) {
    return axios.delete(`${API_URL}/${id}`);
}