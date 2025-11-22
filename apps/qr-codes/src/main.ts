import { NestFactory } from '@nestjs/core';
import { QrCodesModule } from './qr-codes.module';

async function bootstrap() {
  const app = await NestFactory.create(QrCodesModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
