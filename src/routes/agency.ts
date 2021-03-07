import { RouteObject } from '../interface/route';
import { AgencyController } from '../controller/AgencyController';

type AgencyRoutesType = Array<RouteObject>;

export const AgencyRoutes: AgencyRoutesType = [
  {
    method: 'get',
    route: '/agency',
    controller: AgencyController,
    action: 'all',
  },
  {
    method: 'post',
    route: '/agency',
    controller: AgencyController,
    action: 'create',
  },
  {
    method: 'put',
    route: '/agency/:id',
    controller: AgencyController,
    action: 'update',
  },
  {
    method: 'delete',
    route: '/agency/:id',
    controller: AgencyController,
    action: 'remove',
  },
];
