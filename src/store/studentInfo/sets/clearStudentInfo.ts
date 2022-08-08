import { TAction } from 'store/TAction';

export const CLEAR_SEARCHED_STUDENT = 'searchedStudent/clear';

export const clearStudentInfo = (): TAction<typeof CLEAR_SEARCHED_STUDENT> => ({
  type: CLEAR_SEARCHED_STUDENT,
});
