import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
    path: '/',
    name: 'index',
    component: () => import('@/layout/BaseTemplate.vue'),
   },
   {
      path: '/register',
      name: 'register',
      
   },
   {
      path: '/auth',
      component: () => import('@/views/auth/Auth.vue')
   }
] 

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  }) 
   
  export default router