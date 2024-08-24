import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from './products.entity';

@Injectable()
export class ProductsService extends TypeOrmCrudService<ProductsEntity>{

    constructor(@InjectRepository(ProductsEntity) repo) {
        super(repo);
    }

}
