import { MessangerInRoutes } from './message-in';
import { MessangerOutRoutes } from './message-out';
import { UserInRoutes } from './user';
import { AgencyRoutes } from './agency';
import { HomeController } from '../controller/HomeController';
import { sayHi } from '../middlewares/sayHi';

export const Routes = [
  ...UserInRoutes,
  ...AgencyRoutes,
  ...MessangerInRoutes,
  ...MessangerOutRoutes,
  {
    method: 'all',
    route: '/*',
    controller: HomeController,
    action: 'notFound',
  },
];
