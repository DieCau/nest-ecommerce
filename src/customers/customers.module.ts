import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './customers.controller';
import { CustomersService } from '../services/customers.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [CustomersService],
  controllers: [CustomersController],
})
export class CustomersModule {}
