import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apikey: string,
    @Inject('TASKS') private tasks: any[]
  ) {}
  getHello(): string {
    console.log(this.tasks);
    return `Tu Api_Key tiene el valor: ${this.apikey}`;
  }
}
