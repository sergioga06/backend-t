import { Injectable } from '@nestjs/common';

@Injectable()
export class QrCodesService {
  getHello(): string {
    return 'Hello World!';
  }
}
