import { Module } from '@nestjs/common';
import { BrandsService } from './brand/services/brands.service';
import { CategoriesService } from './category/services/categories.service';
import { CustomersService } from './customer/services/customers.service';
import { OrdersService } from './order/services/orders.service';
import { ProductsService } from './product/services/products.service';
import { UsersService } from './user/services/users.service';
import { BrandsModule } from './brand/controllers/brands.module';
import { ProductsModule } from './product/controllers/products.module';
import { CategoriesModule } from './category/controllers/categories.module';
import { CustomersModule } from './customer/controllers/customers.module';
import { UsersModule } from './user/controllers/users.module';
import { OrdersModule } from './order/controllers/orders.module';

@Module({
  imports: [
    BrandsModule,
    ProductsModule,
    CategoriesModule,
    CustomersModule,
    UsersModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [
    ProductsService,
    BrandsService,
    CategoriesService,
    CustomersService,
    OrdersService,
    UsersService,
  ],
})
export class AppModule {}
