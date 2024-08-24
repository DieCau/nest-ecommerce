import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandsController } from './brands.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [],
  controllers: [BrandsController],
})
export class BrandsModule {}
