

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Staff from "../views/staff/Staff.vue";
import Admin from "../views/admin/Admin.vue";
import Tickets from '../views/Tickets.vue'
import Events from '../views/Events.vue'
import About from '../views/About.vue'
import Buy from '../views/Buy.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },

  {

    path: '/tickets',
    name: 'Tickets',
    component: Tickets
  },
  {
    path:'/Buy',
    name:'Buy',
    component: Buy

  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  
  {
    path: "/staff",
    name: "Staff",
    component: Staff,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
