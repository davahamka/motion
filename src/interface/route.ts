export interface RouteObject {
  method: string;
  route: string;
  controller: Function;
  action: string;
  middleware?: Function;
  middleware_2?: any;
}
