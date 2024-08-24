import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [],
  controllers: [OrdersController],
})
export class OrdersModule {}
