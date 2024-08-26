import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';

@Controller('rest/users')
export class UsersController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'user created',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
      message: 'modified user',
    };
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
      message: 'user removed',
    };
  }
}
