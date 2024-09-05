import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('API_KEY') private apikey: string) {}
  getHello(): string {
    return `Tu Api_Key tiene el valor: ${this.apikey}`;
  }
}
