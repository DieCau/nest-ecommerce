import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from '../services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
