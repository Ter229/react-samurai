import axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "08c2cafb-cd66-4d92-8428-d85a8b287fa7"
    },



})





export const getUsers = (currentPage = 1,pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data
    })
}



export const getFollow = (u) => {
    return instance.post(`follow/${u}`)
}

export const getUnfollow = (u) => {
    return instance.delete(`follow/${u}`,)
}


export const me = () =>{
    return instance.get(`auth/me`)
}

export const getProfile = (userId) => {
    return profileAPI.getProfile(userId)
}





export const profileAPI ={
    getProfile (userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, { status: status} )
    }
}



export const authAPI = {
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}


// export const login = (email,password,rememberMe = false) =>{
//     return instance.post(`auth/login`, { email,password,rememberMe })
// }

// export const logout = () =>{
//     return instance.delete(`auth/login`)
// }