import { ERoutes } from 'enums/ERoutes';
import { TAction } from 'store/TAction';

export const SET_CURRENT_ROUTE = 'currentRoute/set';

export const setCurrentRoute = (currentRoute: ERoutes): TAction<typeof SET_CURRENT_ROUTE, ERoutes> => ({
  type: SET_CURRENT_ROUTE,
  data: currentRoute,
});
