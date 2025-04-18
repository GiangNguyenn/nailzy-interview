import * as mongoose from 'mongoose';

const dbUrl = 'mongodb://localhost:27017/nailzy';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(dbUrl),
  },
];
