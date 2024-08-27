import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from '../services/orders.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
