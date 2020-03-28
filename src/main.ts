import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './app.type';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  const servicePort = configService.get(PORT) || 3000;
  await app.listen(servicePort, () =>
    console.log(`Testing hub service started at port ${servicePort}`),
  );
}
bootstrap();
