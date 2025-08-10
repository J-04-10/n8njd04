import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaService } from './common/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',').map((s) => s.trim()) ?? ['*'];
  app.enableCors({ origin: allowedOrigins, credentials: true });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  const port = process.env.PORT ? Number(process.env.PORT) : 8080;
  await app.listen(port);
}
bootstrap();
