import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';

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
  providers: [],
})
export class AppModule {}
