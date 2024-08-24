import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { BrandsService } from './brands.service';
import { BrandsEntity } from './brands.entity';
import { RouteMetadata } from 'nestjs-gis'

@RouteMetadata()
@Crud({
    model:{type:BrandsEntity},
    params:{
    }
})
@Controller('rest/brands')
export class BrandsController {

  constructor(private service: BrandsService) { }

}
