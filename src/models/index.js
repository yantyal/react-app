// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ActivityReport, Person, Board } = initSchema(schema);

export {
  ActivityReport,
  Person,
  Board
};