import {
  Body,
  Controller,
  Get,
  Delete,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ParseIntPipe } from './../../common/parse-int.pipe';
import { UsersService } from './../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Get(':id/orders')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getOrderByUser(id);
  }

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
