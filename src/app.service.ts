import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS!';
  }
  postHello(txt: string): string {
    let str = txt;
    return str;
  }
}
