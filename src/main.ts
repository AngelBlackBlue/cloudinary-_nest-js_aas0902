import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // se adminte DTO
      forbidNonWhitelisted: true, // error si envia otra informacion
      transform: true, //transformar los datos siempre que pueda
    }),
  );

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT_SERVER') || 3001;
  await app.listen(port);

}
bootstrap();
