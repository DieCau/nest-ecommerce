import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { OrdersService } from './orders.service';
import { OrdersEntity } from './orders.entity';
import { RouteMetadata } from 'nestjs-gis'

@RouteMetadata()
@Crud({
    model:{type:OrdersEntity},
    params:{
    }
})
@Controller('rest/orders')
export class OrdersController {

  constructor(private service: OrdersService) { }

}
