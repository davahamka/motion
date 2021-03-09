import { RouteObject } from '../interface/route';
import { MessageInController } from '../controller/MessageInController';
import { checkToken } from '../middlewares/auth.middleware';
import multer = require('multer');
import { diskStorage } from '../common/upload-file';

type MessangerInRoutesType = Array<RouteObject>;

export const MessangerInRoutes: MessangerInRoutesType = [
  {
    method: 'get',
    route: '/inbox',
    controller: MessageInController,
    action: 'all',
    middleware: checkToken,
    middleware_2: multer({ storage: diskStorage }),
  },
  {
    method: 'post',
    route: '/inbox/create',
    controller: MessageInController,
    action: 'create',
    middleware: checkToken,
  },
  {
    method: 'get',
    route: '/inbox/group_by_agency',
    controller: MessageInController,
    action: 'groupByAgency',
    middleware: checkToken,
  },
  {
    method: 'get',
    route: '/inbox/group_by_date',
    controller: MessageInController,
    action: 'groupByDate',
    middleware: checkToken,
  },
  {
    method: 'get',
    route: '/inbox/total_inbox',
    controller: MessageInController,
    action: 'countByDate',
    middleware: checkToken,
  },
];
