import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [UsersService, CustomersService],
  controllers: [UsersController, CustomerController],
})
export class UsersModule {}
