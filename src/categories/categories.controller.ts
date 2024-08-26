import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':id/categorys/:categoryId')
  getCategories(
    @Param('categoryId') categoryId: string,
    @Param('id') id: string
  ) {
    return `category: ${categoryId} and your id: ${id}`;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'category created',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
      message: 'modified category',
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
      message: 'category removed',
    };
  }
}
