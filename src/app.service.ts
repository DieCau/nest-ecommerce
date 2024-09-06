import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apikey: string,
    @Inject('TASKS') private tasks: any[],
    private config: ConfigService
  ) {}
  getHello(): string {
    const apikey = this.config.get<string>('API_KEY');
    const dbName = this.config.get('DATABASE_NAME');
    return `Tu Api_Key tiene el valor: ${apikey} y la DB se llama ${dbName}`;
  }
}
