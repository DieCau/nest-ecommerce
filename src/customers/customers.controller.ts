import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';

@Controller('rest/customers')
export class CustomersController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'customer created',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
      message: 'modified customer',
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
      message: 'customer removed',
    };
  }
}
