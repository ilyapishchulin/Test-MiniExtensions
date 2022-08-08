import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectStudentListByClassNames } from 'store/studentInfo/selectors/selectStudentListByClassNames';
import { StudentCell } from './components/StudentCell/StudentCell';

export const StudentList: FC = () => {
  const studentListByClassNames = useSelector(selectStudentListByClassNames);

  if (typeof studentListByClassNames === 'undefined') {
    return <div>Loading...</div>;
  }

  const studentsEntries = Object.entries(studentListByClassNames);
  if (studentsEntries.length === 0) {
    return <div>Empty response</div>;
  }

  return (
    <div>
      {studentsEntries.map(([studentClassName, studentNames]) => (
        <StudentCell
          key={studentClassName}
          studentClassName={studentClassName}
          studentNames={studentNames}
        />
      ))}
    </div>
  );
}
