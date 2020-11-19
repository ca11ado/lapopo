import store from '@/store';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkNmae: "settings" */ '../views/settings.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.name === 'Login') {
    next();
  } else {
    const { state: { user: { name: userName } } } = store;
    const backRoute = to.name && routes.some(({ name }) => name === to.name)
      ? String(to.name)
      : '';

    if (userName) next();
    else next({ name: 'Login', query: { back: to.name ? backRoute : '' } });
  }
});

export default router;
