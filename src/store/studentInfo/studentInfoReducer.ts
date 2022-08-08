import { TStudentInfoSets } from './TStudentInfoSets';
import { TStudentInfoState } from './TStudentInfoState';
import { studentInfoState } from './studentInfoState';

import { SET_SEARCHED_STUDENT } from './sets/setSearchedStudent';
import { actionSetSearchedStudent } from './actions/actionSetSearchedStudent';
import { SET_STUDENTS_LIST_BY_CLASS_NAMES } from './sets/setStudentsListByClassNames';
import { actionSetStudentListByClassNames } from './actions/actionSetStudentListByClassNames';
import { CLEAR_SEARCHED_STUDENT } from './sets/clearStudentInfo';
import { actionClearStudentInfo } from './actions/actionClearStudentInfo';

export const studentInfoReducer = (
  state: TStudentInfoState = studentInfoState,
  action: TStudentInfoSets,
): TStudentInfoState => {
  switch (action.type) {
    case SET_SEARCHED_STUDENT:
      return actionSetSearchedStudent(state, action.data);

    case SET_STUDENTS_LIST_BY_CLASS_NAMES:
      return actionSetStudentListByClassNames(state, action.data);

    case CLEAR_SEARCHED_STUDENT:
      return actionClearStudentInfo();

    default:
      return state;
  }
};
