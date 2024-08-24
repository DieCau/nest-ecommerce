import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandsController } from './brands.controller';
import { BrandsEntity } from './brands.entity';
import { BrandsService } from './brands.service';

@Module({
  imports: [TypeOrmModule.forFeature([BrandsEntity])],
  providers: [BrandsService],
  controllers: [BrandsController]
})
export class BrandsModule { }
