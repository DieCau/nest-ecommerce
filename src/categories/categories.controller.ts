import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CategoriesService } from './categories.service';
import { CategoriesEntity } from './categories.entity';
import { RouteMetadata } from 'nestjs-gis'

@RouteMetadata()
@Crud({
    model:{type:CategoriesEntity},
    params:{
    }
})
@Controller('rest/categories')
export class CategoriesController {

  constructor(private service: CategoriesService) { }

}
