import { Module } from '@nestjs/common';
import { BrandsService } from './brands/services/brands.service';
import { CategoriesService } from './categories/services/categories.service';
import { CustomersService } from './customers/services/customers.service';
import { OrdersService } from './orders/services/orders.service';
import { ProductsService } from './products/services/products.service';
import { UsersService } from './users/services/users.service';
import { BrandsModule } from './brands/controllers/brands.module';
import { ProductsModule } from './products/controllers/products.module';
import { CategoriesModule } from './categories/controllers/categories.module';
import { CustomersModule } from './customers/controllers/customers.module';
import { UsersModule } from './users/controllers/users.module';
import { OrdersModule } from './orders/controllers/orders.module';

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
