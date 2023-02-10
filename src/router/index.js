import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
    path: '/',
    component: () => import('@/layout/BaseTemplate.vue'),
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