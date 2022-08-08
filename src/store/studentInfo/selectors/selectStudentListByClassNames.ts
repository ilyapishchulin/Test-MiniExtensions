import { TStore } from 'store/TStore';
import { TStudentListByClassNames } from 'types/TStudentListByClassNames';

export const selectStudentListByClassNames = (store: TStore): TStudentListByClassNames | undefined => store.studentInfo.studentListByClassNames;
