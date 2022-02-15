import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiNTBhOGMzNDktMjFiNi00YjdiLTg2YWUtMGVmMzg2NGE0OTJjIiwibmJmIjoxNjQ0ODQwMTkzLCJleHAiOjE2NDQ4NDEwOTMsImlhdCI6MTY0NDg0MDE5M30.AnF7DfHC2UICoikYKFYM8VR6hlkVlVWgLvquhgk-FBg"

 const instance = axios.create({
     baseURL: 'https://localhost:7001',
     timeout: 40000,
     headers: {
         'Content-Type': 'application/json; charset=utf-8',
        
        }
 });

 instance.interceptors.request.use(
     config => {
         config.headers.authorization = `Bearer ${token}`;
         return config;
     },
     error => {
         return Promise.reject(error);
     }
 );

 const UserAccounts = '/User/Get user accounts';

 const state = () => ({
    User: {
        Firstname: '',
        Lastname: '',
        MainAccountBalance: '',
        SubAccount: []
    }
 })

 const getters = {
   getUserData(state) {
       return state.User;
   }
};
 
const actions = {                               
    async getUserAccounts({commit}) {
        console.log(`Bearer ${token}`)
        await instance.post(UserAccounts)
        .then(response => {
            commit('saveAccounts', response.data);
            console.log(response.data)
        })
    }
};
 
const mutations = {
    saveAccounts(state, data) {
        const newModel = {
            Firstname: data.firstname,
            Lastname: data.lastname,
            MainAccountBalance: data.mainAccountBalance,
            SubAccount: JSON.parse(data.subBankAccounts)
        }

        state.User = newModel;
    }
  
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}