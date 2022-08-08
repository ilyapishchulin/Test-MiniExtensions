import { TRouterSets } from './TRouterSets';
import { TRouterState } from './TRouterState';
import { routerState } from './routerState';

import { SET_CURRENT_ROUTE } from './sets/setCurrentRoute';
import { actionSetCurrentRoute } from './actions/actionSetCurrentRoute';

export const routerReducer = (
  state: TRouterState = routerState,
  action: TRouterSets,
): TRouterState => {
  switch (action.type) {
    case SET_CURRENT_ROUTE:
      return actionSetCurrentRoute(state, action.data);

    default:
      return state;
  }
};
