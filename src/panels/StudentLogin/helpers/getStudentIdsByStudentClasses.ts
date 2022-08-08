import { FieldSet, Table } from 'airtable';

type TStudentIdsByClasses = Record<string, string[]>;

/** Return object with className => studentIds */
export const getStudentIdsByStudentClasses = (table: Table<FieldSet>, studentClassIds: string[]): Promise<TStudentIdsByClasses> => {
  return new Promise<TStudentIdsByClasses>((resolve, reject) => {
    let studentIdsByClasses: TStudentIdsByClasses = {};

    table.select({
      filterByFormula: `SEARCH(RECORD_ID(), "${studentClassIds.join(',')}") != ""`,
    }).eachPage((records, processNextPage) => {
      records.forEach((record) => {
        const className = record.get('Name');
        const studentsIds = record.get('Students');

        if (typeof className === 'string' && Array.isArray(studentsIds)) {
          studentIdsByClasses[className] = studentsIds;
        }
      });

      processNextPage();
    }).then(() => {
      resolve(studentIdsByClasses);
    }).catch(reject);
  });
};
