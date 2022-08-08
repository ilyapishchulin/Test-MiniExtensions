import Airtable  from 'airtable';

const AIRFLOW_PUBLIC_API_KEY = 'keyrdEvbO4MwzWf3Y';
const AIRFLOW_BASE_ID = 'app8ZbcPx7dkpOnP0';

const airtable = new Airtable({
  apiKey: AIRFLOW_PUBLIC_API_KEY,
}).base(AIRFLOW_BASE_ID);

const TABLE_NAME_STUDENT = 'Students';
const TABLE_NAME_CLASSES = 'Classes';

export const useAirtable = () => {
  const getStudentsTable = () => {
    return airtable.table(TABLE_NAME_STUDENT);
  };

  const getClassesTable = () => {
    return airtable.table(TABLE_NAME_CLASSES);
  };

  return {
    getStudentsTable,
    getClassesTable,
  };
};
