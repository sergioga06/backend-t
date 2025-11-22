import { Test, TestingModule } from '@nestjs/testing';
import { QrCodesController } from './qr-codes.controller';
import { QrCodesService } from './qr-codes.service';

describe('QrCodesController', () => {
  let qrCodesController: QrCodesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [QrCodesController],
      providers: [QrCodesService],
    }).compile();

    qrCodesController = app.get<QrCodesController>(QrCodesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(qrCodesController.getHello()).toBe('Hello World!');
    });
  });
});
