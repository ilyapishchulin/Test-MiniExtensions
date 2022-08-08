import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './StudentLogin.css';

import { useRouter } from 'hooks/useRouter';
import { useAirtable } from 'hooks/useAirtable';
import { ERoutes } from 'enums/ERoutes';

import { selectSearchedStudent } from 'store/studentInfo/selectors/selectSearchedStudent';
import { setSearchedStudent } from 'store/studentInfo/sets/setSearchedStudent';
import { setStudentsListByClassNames } from 'store/studentInfo/sets/setStudentsListByClassNames';

import { getStudentNamesByClassName } from './helpers/getStudentNamesByClassName';
import { CentredLayout } from 'components/Layouts/CentredLayout/CentredLayout';

const StudentLogin: FC = () => {
  const dispatch = useDispatch();

  const { setPage } = useRouter();
  const { getStudentsTable, getClassesTable } = useAirtable();
  const searchedStudent = useSelector(selectSearchedStudent);

  const onStudentNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchedStudent(e.currentTarget.value));
  };

  const searchStudent = () => {
    setPage(ERoutes.RESULTS);
    getStudentNamesByClassName(getStudentsTable(), getClassesTable(), searchedStudent)
      .then((studentsList) => dispatch(setStudentsListByClassNames(studentsList)))
      .catch(console.error);
  };

  return (
    <CentredLayout>
      <section>
        <input value={searchedStudent} onChange={onStudentNameChange} placeholder="Enter student name" />
        <button disabled={searchedStudent.length === 0} onClick={searchStudent} className="StudentLogin__button">Log in</button>
      </section>
    </CentredLayout>
  );
}

export default StudentLogin;
