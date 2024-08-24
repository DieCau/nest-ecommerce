import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CustomersService } from './customers.service';
import { CustomersEntity } from './customers.entity';
import { RouteMetadata } from 'nestjs-gis'

@RouteMetadata()
@Crud({
    model:{type:CustomersEntity},
    params:{
    }
})
@Controller('rest/customers')
export class CustomersController {

  constructor(private service: CustomersService) { }

}
