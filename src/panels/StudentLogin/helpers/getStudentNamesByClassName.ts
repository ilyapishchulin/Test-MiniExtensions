import { FieldSet, Table } from 'airtable';

import { TStudentListByClassNames } from 'types/TStudentListByClassNames';

import { getStudentsClassesByStudentName } from './getStudentsClassesByStudentName';
import { getStudentIdsByStudentClasses } from './getStudentIdsByStudentClasses';
import { getStudentNamesByStudentIds } from './getStudentNamesByStudentIds';

/** Function collects the logic of all promises into one call and connects all rejects into one */
export const getStudentNamesByClassName = (
  studentTable: Table<FieldSet>,
  classesTable: Table<FieldSet>,
  searchedStudent: string
): Promise<TStudentListByClassNames> => {
  return new Promise((resolve, reject) => {
    getStudentsClassesByStudentName(studentTable, searchedStudent)
      .then((searchedClasses) => {
        if (searchedClasses.length === 0) {
          resolve({});
        }

        getStudentIdsByStudentClasses(classesTable, searchedClasses)
          .then((studentsClassesByIds) => {
            const allStudentIds = Object.values(studentsClassesByIds).reduce((prev, current) => prev.concat(current), []);

            getStudentNamesByStudentIds(studentTable, allStudentIds)
              .then((studentNamesByIds) => {
                const studentNamesByClassName: TStudentListByClassNames = {};

                Object.entries(studentsClassesByIds).forEach(([className, studentIds]) => {
                  studentNamesByClassName[className] = studentIds.map((studentId) => studentNamesByIds[studentId]);
                });

                resolve(studentNamesByClassName);
              })
              .catch(reject);
          })
          .catch(reject);
      })
      .catch(reject);
  });
};
