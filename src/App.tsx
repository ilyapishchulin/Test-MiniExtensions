import { FC, lazy, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentRoute } from 'store/router/selectors/selectCurrentRoute';
import { ERoutes } from 'enums/ERoutes';

const StudentLogin = lazy(() => import('./panels/StudentLogin/StudentLogin'));
const StudentList = lazy(() => import('panels/StudentList/StudentResults'));

export const App: FC = () => {
  const currentRoute = useSelector(selectCurrentRoute);

  const Route = useMemo(() => {
    switch (currentRoute) {
      case ERoutes.RESULTS:
        return StudentList;

      case ERoutes.LOGIN:
      default:
        return StudentLogin;
    }
  }, [currentRoute]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route />
    </Suspense>
  );
};
