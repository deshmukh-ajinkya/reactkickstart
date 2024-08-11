import Login from '../components/login/login';
import { RouteConfig } from '../interface';

export const publicRoutes: RouteConfig[] = [{ path: '/login', element: <Login /> }];
