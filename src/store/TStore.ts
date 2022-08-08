import { TRouterState } from './router/TRouterState';
import { TStudentInfoState } from './studentInfo/TStudentInfoState';

export type TStore = {
  router: TRouterState;
  studentInfo: TStudentInfoState;
};
