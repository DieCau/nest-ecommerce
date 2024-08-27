import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from '../services/products.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
