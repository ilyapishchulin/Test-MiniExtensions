import { ERoutes } from 'enums/ERoutes';
import { TStore } from 'store/TStore';

export const selectCurrentRoute = (store: TStore): ERoutes => store.router.currentRoute;
