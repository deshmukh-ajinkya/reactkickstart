import Dashboard from '../components/dashboard/dashboard';
import { RouteConfig } from '../interface';

export const privateRoutes: RouteConfig[] = [{ path: '/', element: <Dashboard /> }];
