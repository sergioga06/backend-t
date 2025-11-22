import { Injectable } from '@nestjs/common';

@Injectable()
export class TablesService {
  getHello(): string {
    return 'Hello World!';
  }
}
