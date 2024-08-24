import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesEntity } from './categories.entity';

@Injectable()
export class CategoriesService extends TypeOrmCrudService<CategoriesEntity>{

    constructor(@InjectRepository(CategoriesEntity) repo) {
        super(repo);
    }

}
