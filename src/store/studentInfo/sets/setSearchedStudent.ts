import { TAction } from 'store/TAction';

export const SET_SEARCHED_STUDENT = 'searchedStudent/set';

export const setSearchedStudent = (searchedStudent: string): TAction<typeof SET_SEARCHED_STUDENT, string> => ({
  type: SET_SEARCHED_STUDENT,
  data: searchedStudent,
});
