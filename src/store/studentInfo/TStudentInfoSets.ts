import { setSearchedStudent } from './sets/setSearchedStudent';
import { clearStudentInfo } from './sets/clearStudentInfo';
import { setStudentsListByClassNames } from './sets/setStudentsListByClassNames';

export type TStudentInfoSets = ReturnType<
  typeof setSearchedStudent |
  typeof clearStudentInfo |
  typeof setStudentsListByClassNames
>;
