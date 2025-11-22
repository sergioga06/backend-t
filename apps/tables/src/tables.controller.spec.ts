import { Test, TestingModule } from '@nestjs/testing';
import { TablesController } from './tables.controller';
import { TablesService } from './tables.service';

describe('TablesController', () => {
  let tablesController: TablesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TablesController],
      providers: [TablesService],
    }).compile();

    tablesController = app.get<TablesController>(TablesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tablesController.getHello()).toBe('Hello World!');
    });
  });
});
