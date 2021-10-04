import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import store from '../store/index'
import Splash from '../views/Splash.vue'
import Profile from '../views/Profile.vue'
import Agenda from '../views/Agenda.vue'
import Offices from '../views/Offices.vue'
import DoctorSelect from '../views/DoctorSelect.vue'
import Routing from '../views/Routing.vue'

Vue.use(Router)

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/",
    name: "splash",
    component: Splash,
    meta: {
      requiresAuth: false
    }
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/agenda",
      name: "agenda",
      component: Agenda,
      meta: {
        requiresAuth: false
      }
      
    },
    {
      path: "/offices",
      name: "offices",
      component: Offices,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/doctor-select",
      name: "doctor-select",
      component: DoctorSelect,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/routing",
      name: "routing",
      component: Routing,
      meta: {
        requiresAuth: true
      }
    }
    
  ]
})

router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});

export default router;
