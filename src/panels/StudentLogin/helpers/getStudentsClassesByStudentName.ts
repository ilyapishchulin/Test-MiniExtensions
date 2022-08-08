import { FieldSet, Table } from 'airtable';

/** Return classIds by student name query */
export const getStudentsClassesByStudentName = (table: Table<FieldSet>, studentName: string): Promise<string[]> => {
  return new Promise<string[]>((resolve, reject) => {
    let classes: string[] = [];

    table.select({
      filterByFormula: `FIND("${studentName}", name)`,
    }).eachPage((records, processNextPage) => {
      records.forEach((record) => {
        const recordClasses = record.get('Classes');
        if (Array.isArray(recordClasses)) {
          classes = classes.concat(recordClasses);
        }
      });

      processNextPage();
    }).then(() => {
      resolve(classes);
    }).catch(reject);
  });
};
