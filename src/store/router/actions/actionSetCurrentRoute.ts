import { TRouterState } from '../TRouterState';
import { setCurrentRoute } from '../sets/setCurrentRoute';

export const actionSetCurrentRoute = (
  state: TRouterState,
  currentRoute: ReturnType<typeof setCurrentRoute>['data'],
): TRouterState => ({
  ...state,
  currentRoute,
});

