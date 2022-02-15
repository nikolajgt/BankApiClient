import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Home.vue'
import TranasferMoney from '../views/TransferMoney.vue'
import LandingPage from '../views/Landing-page.vue'
import Login from '../views/Login.vue'
import store from '../store/index.js'

const routes = [
  { path: "/Dashboard", name: Dashboard, component: Dashboard, meta: { requiredAuth: true, showNavbar: false, showSidebar: true, } },
  { path: "/Transfer", name: TranasferMoney, component: TranasferMoney, meta: { requiredAuth: true, showNavbar: false, showSidebar: true, } },
  { path: "/Login", name: Login, component: Login, meta: { requiredAuth: false, showNavbar: false } },
  { path: "/", name: LandingPage, component: LandingPage, children: [  ], meta: { requiredAuth: false, showNavbar: true } },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(!store.getters["auth/getAuthData"].Token) {

     const access_token = localStorage.getItem("access_token");
     const refresh_token = localStorage.getItem("refresh_token");

     if(access_token) {
       const data = {
         jwtToken:access_token,
         refreshToken:refresh_token,
       };
     store.commit("auth/saveTokenData", data);
 
     }
   }
 
   const auth = store.getters["auth/isTokenActive"];
 
   if(to.fullPath == "/" ) {
     console.log("to.Fullpath HIT")
     return next();
   }
 
   else if(auth && !to.meta.requiredAuth) { 
    console.log("!to.meta.requiredAuth HIT")
      localStorage.removeItem("access_token");
     localStorage.removeItem("refresh_token");
     return next({path: "/"});
   }
 
   else if(!auth && to.meta.requiredAuth) {
    console.log("!auth HIT")
     return next({path: "/"});
   }
 
   return next();
 
  });



export default router
