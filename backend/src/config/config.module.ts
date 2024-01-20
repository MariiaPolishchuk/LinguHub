import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', 'config/database.env'],
    }),
  ],
  exports: [ConfigModule],
})
export class ConfigurationModule {}
