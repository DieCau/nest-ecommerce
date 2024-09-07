import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apikey: string,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>
  ) {}
  getHello(): string {
    const apikey = this.configService.apikey;
    const dbName = this.configService.database.name;
    return `Tu Api_Key tiene el valor: ${apikey} y la DB se llama ${dbName}`;
  }
}
