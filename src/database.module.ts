// database.module.ts
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders], // Export so other modules can use
})
export class DatabaseModule {}
