import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersEntity } from './orders.entity';

@Injectable()
export class OrdersService extends TypeOrmCrudService<OrdersEntity>{

    constructor(@InjectRepository(OrdersEntity) repo) {
        super(repo);
    }

}
