import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';

@Controller('rest/brands')
export class BrandsController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'brand created',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
      message: 'modified brand',
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
      message: 'brand removed',
    };
  }
}
