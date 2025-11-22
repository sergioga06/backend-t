import { Controller, Get } from '@nestjs/common';
import { QrCodesService } from './qr-codes.service';

@Controller()
export class QrCodesController {
  constructor(private readonly qrCodesService: QrCodesService) {}

  @Get()
  getHello(): string {
    return this.qrCodesService.getHello();
  }
}
