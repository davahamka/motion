import { RouteObject } from '../interface/route';
import { UsersController } from '../controller/UsersController';

type UserRoutesType = Array<RouteObject>;

export const UserInRoutes: UserRoutesType = [
  {
    method: 'get',
    route: '/users',
    controller: UsersController,
    action: 'all',
  },
  {
    method: 'post',
    route: '/users/register',
    controller: UsersController,
    action: 'register',
  },
  {
    method: 'post',
    route: '/users/login',
    controller: UsersController,
    action: 'login',
  },
  {
    method: 'delete',
    route: '/users/:id',
    controller: UsersController,
    action: 'remove',
  },
];
