import { FieldSet, Table } from 'airtable';

type TStudentNamesByIds = Record<string, string>;

/** Return map with student name by ids studentId => studentName */
export const getStudentNamesByStudentIds = (table: Table<FieldSet>, studentIds: string[]): Promise<TStudentNamesByIds> => {
  return new Promise<TStudentNamesByIds>((resolve, reject) => {
    let studentIdsByClasses: TStudentNamesByIds = {};

    table.select({
      filterByFormula: `SEARCH(RECORD_ID(), "${studentIds.join(',')}") != ""`,
    }).eachPage((records, processNextPage) => {
      records.forEach((record) => {
        const studentId = record.getId();
        const studentName = record.get('Name');

        if (typeof studentName === 'string') {
          studentIdsByClasses[studentId] = studentName;
        }
      });

      processNextPage();
    }).then(() => {
      resolve(studentIdsByClasses);
    }).catch(reject);
  });
};
