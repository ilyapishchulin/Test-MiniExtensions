import { TStore } from 'store/TStore';

export const selectSearchedStudent = (store: TStore): string => store.studentInfo.searchedStudent;
