import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Diego esto es NestJs!';
  }

  @Get('nuevo')
  newEndPoint() {
    return 'yo soy nuevo en NestJs';
  }

  @Get('/ruta/')
  hello() {
    return 'con /SaSaS/';
  }

  // Querys
  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string
  ) {
    return `products: limit => ${limit} offset => ${offset} brand => ${brand}`;
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product: ${productId}`;
  }

  // Params
  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string
  ) {
    return `product: ${productId} and your id: ${id}`;
  }
}
