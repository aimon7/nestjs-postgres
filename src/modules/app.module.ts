import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.CONTAINER === 'yes' ? 'postgres' : 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true, // for dev
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
