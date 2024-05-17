import axios from "axios";

const http = axios.create({
    baseURL: '/api',
})

http.interceptors.request.use((request) => {

    if (localStorage.getItem('token')) {
        request.headers.set('authorization', 'Bearer ' + localStorage.getItem('token'))
    }
    return request
})


http.interceptors.response.use(resp => {
    if (resp.data.code !== 200) {
        return Promise.reject(resp.data)
    }
    return resp.data
})

export {
    http,
}