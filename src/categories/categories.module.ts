import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from '../services/categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
