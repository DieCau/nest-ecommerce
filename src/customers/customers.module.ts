import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './customers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [],
  controllers: [CustomersController],
})
export class CustomersModule {}
