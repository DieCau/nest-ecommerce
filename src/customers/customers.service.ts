import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomersEntity } from './customers.entity';

@Injectable()
export class CustomersService extends TypeOrmCrudService<CustomersEntity>{

    constructor(@InjectRepository(CustomersEntity) repo) {
        super(repo);
    }

}
