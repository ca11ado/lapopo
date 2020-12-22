import store from '@/store';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { ActionTypes } from '@/store/action-types';
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
    path: '/pokers/:hash',
    name: 'Poker',
    component: () => import(/* webpackChunkName: "poker" */ '../views/poker.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: () => import(/* webpackChunkName: "error" */ '../views/error.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  if (to.name === 'Login') {
    return true;
    // router.push(to);
  }

  await store.dispatch(ActionTypes.GET_USER);
  const { state: { user: { name: userName } } } = store;
  const backRoute = !userName && to.name && routes.some(({ name }) => name === to.name)
    ? String(to.fullPath)
    : '';

  if (userName) {
    return true;
  }

  return router.push({ name: 'Login', query: { back: backRoute } });
});

export default router;
