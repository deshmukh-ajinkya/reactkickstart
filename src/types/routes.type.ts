import React from 'react';
import { privateRoutes } from '../routes/private.routes';
import { publicRoutes } from '../routes/public.routes';

export const RoutesList: TCustomRoute = {
  private: privateRoutes,
  public: publicRoutes
};

export type TRouteType = {
  path: string;
  element: React.ReactNode;
  children?: TRouteType[];
};

export type TCustomRoute = {
  private?: TRouteType[];
  public?: TRouteType[];
};
export type TLoaderReturn = Response | null;
