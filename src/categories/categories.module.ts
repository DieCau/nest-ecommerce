import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
