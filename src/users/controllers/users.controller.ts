import {
  Body,
  Controller,
  Get,
  Delete,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { ParseIntPipe } from './../../common/parse-int.pipe';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { UsersService } from './../services/users.service';

@Controller('users')
@ApiTags('Users')
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
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateUserDto) {
    return this.usersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
