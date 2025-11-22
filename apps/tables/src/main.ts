import { NestFactory } from '@nestjs/core';
import { TablesModule } from './tables.module';

async function bootstrap() {
  const app = await NestFactory.create(TablesModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
