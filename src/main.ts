import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const nestApp = await NestFactory.create(AppModule);
  nestApp.useGlobalPipes(new ValidationPipe());

  await nestApp.listen(7000);
}
bootstrap();
