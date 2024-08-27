import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandsController } from './brands.controller';
import { BrandsService } from '../services/brands.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [BrandsService],
  controllers: [BrandsController],
})
export class BrandsModule {}
