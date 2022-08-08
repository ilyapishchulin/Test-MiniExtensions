import { FC } from 'react';
import { useDispatch } from 'react-redux';
import './StudentResults.css';

import { useRouter } from 'hooks/useRouter';
import { ERoutes } from 'enums/ERoutes';

import { clearStudentInfo } from 'store/studentInfo/sets/clearStudentInfo';

import { CentredLayout } from 'components/Layouts/CentredLayout/CentredLayout';
import { StudentList } from './components/StudentList/StudentList';

const StudentResults: FC = () => {
  const dispatch = useDispatch();
  const { setPage } = useRouter();

  const logOut = () => {
    setPage(ERoutes.LOGIN);
    dispatch(clearStudentInfo());
  };

  return (
    <div>
      <button onClick={logOut} className="StudentResults__button">Log out</button>
      <CentredLayout>
        <StudentList />
      </CentredLayout>
    </div>
  );
};

export default StudentResults;
