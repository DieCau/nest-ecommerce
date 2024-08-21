import { Controller, Get, Param } from '@nestjs/common';
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

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product: ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('productId') productId: string,
    @Param('id') id: string
  ) {
    return `product: ${productId} and your id: ${id}`;
  }
}
