import { useDispatch } from 'react-redux';
import { setCurrentRoute } from 'store/router/sets/setCurrentRoute';
import { ERoutes } from 'enums/ERoutes';

export const useRouter = () => {
  const dispatch = useDispatch();

  const setPage = (route: ERoutes) => {
    dispatch(setCurrentRoute(route));
  };

  return {
    setPage,
  };
};
