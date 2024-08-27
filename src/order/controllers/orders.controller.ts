import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
@Controller('rest/orders')
export class OrdersController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'order created',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
      message: 'modified order',
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
      message: 'order removed',
    };
  }
}
