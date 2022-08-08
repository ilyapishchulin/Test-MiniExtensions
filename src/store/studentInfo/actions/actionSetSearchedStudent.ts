import { TStudentInfoState } from '../TStudentInfoState';
import { setSearchedStudent } from '../sets/setSearchedStudent';

export const actionSetSearchedStudent = (
  state: TStudentInfoState,
  searchedStudent: ReturnType<typeof setSearchedStudent>['data']
): TStudentInfoState => ({
  ...state,
  searchedStudent,
});
