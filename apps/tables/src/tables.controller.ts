import { Controller, Get } from '@nestjs/common';
import { TablesService } from './tables.service';

@Controller()
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @Get()
  getHello(): string {
    return this.tablesService.getHello();
  }
}
