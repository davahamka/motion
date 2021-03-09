import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Login from './views/Login.vue';
import Inbox from './views/Inbox.vue';
import Outbox from './views/Outbox.vue';
import Agency from './views/Agency.vue';
import NotFound from './views/NotFound.vue';

const history = createWebHistory();
const routes = [
  { path: '/', component: Dashboard },
  { path: '/login', component: Login },
  { path: '/inbox', component: Inbox },
  { path: '/outbox', component: Outbox },
  { path: '/agency', component: Agency },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];
const router = createRouter({ history, routes });
export default router;
