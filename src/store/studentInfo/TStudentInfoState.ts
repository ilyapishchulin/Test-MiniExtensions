import { TStudentListByClassNames } from 'types/TStudentListByClassNames';

export type TStudentInfoState = {
  searchedStudent: string;
  studentListByClassNames?: TStudentListByClassNames;
};
