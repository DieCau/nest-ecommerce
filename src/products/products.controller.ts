import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ProductsService } from './products.service';
import { ProductsEntity } from './products.entity';
import { RouteMetadata } from 'nestjs-gis'

@RouteMetadata()
@Crud({
    model:{type:ProductsEntity},
    params:{
    }
})
@Controller('rest/products')
export class ProductsController {

  constructor(private service: ProductsService) { }

}
