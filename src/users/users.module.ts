import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [],
  controllers: [UsersController],
})
export class UsersModule {}
