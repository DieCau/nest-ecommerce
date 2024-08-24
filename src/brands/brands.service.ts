import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandsEntity } from './brands.entity';

@Injectable()
export class BrandsService extends TypeOrmCrudService<BrandsEntity>{

    constructor(@InjectRepository(BrandsEntity) repo) {
        super(repo);
    }

}
