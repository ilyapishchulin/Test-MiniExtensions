import { TStudentInfoState } from '../TStudentInfoState';
import { setStudentsListByClassNames } from '../sets/setStudentsListByClassNames';

export const actionSetStudentListByClassNames = (
  state: TStudentInfoState,
  studentListByClassNames: ReturnType<typeof setStudentsListByClassNames>['data']
): TStudentInfoState => ({
  ...state,
  studentListByClassNames,
});
