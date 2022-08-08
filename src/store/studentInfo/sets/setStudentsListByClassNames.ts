import { TAction } from 'store/TAction';
import { TStudentListByClassNames } from 'types/TStudentListByClassNames';

export const SET_STUDENTS_LIST_BY_CLASS_NAMES = 'studentListByClassNames/set';

export const setStudentsListByClassNames = (
  studentsListByClassNames: TStudentListByClassNames
): TAction<typeof SET_STUDENTS_LIST_BY_CLASS_NAMES, TStudentListByClassNames> => ({
  type: SET_STUDENTS_LIST_BY_CLASS_NAMES,
  data: studentsListByClassNames,
});
