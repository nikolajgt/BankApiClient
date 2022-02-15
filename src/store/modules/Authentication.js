import axios from 'axios';
import { jwtDecrypt, tokenAlive } from "./JwtParser";


 const instance = axios.create({
     baseURL: 'https://localhost:7001',
     timeout: 40000,
     headers: {'Content-Type': 'application/json; charset=utf-8'}
 });

 const AuthenticateEndpoint = '/Login/Authenticate';

 const state = () => ({
     authData: {
         Token: '',
         RefreshToken: '',
         Id: '',
         Expire: '',
         Issued: '',
     },
     loginStatus: '',
 })

 const getters = {
    getLoginStatus(state) {
        return state.loginStatus;
    },
    getAuthData(state) {
        return state.authData;
    },
    isTokenActive(state) {
        if(!state.authData.Expire) {
            return false;
        }

        return tokenAlive(state.authData.Expire);
    }
};
 
const actions = {                               
    async login({commit}, payload) {
        await instance.post(AuthenticateEndpoint, {
            Username: payload.Username,
            Password: payload.Password
        })
        .then(response => { 
            commit("saveTokenData", response.data)              // ARBEJDE HER SIDST!!
            commit("setLoginStatus", "success");
           
        })
    }
};
 
const mutations = {
    saveTokenData(state, data) {
        const tokenData = jwtDecrypt(data.jwtToken);
        const newTokenData = {
            Token: data.jwtToken,
            RefreshToken: data.refreshToken,
            Id: data.id,
            Expire: tokenData.exp,
            Issued: tokenData.iat,
        };
        
        localStorage.setItem("access_token", data.jwtToken);
        localStorage.setItem("refresh_token", data.refreshToken)
        
        state.authData = newTokenData;
    },
    setLoginStatus(state, value) {
        state.loginStatus = value;
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}