import { Controller, Post, Body, UseGuards, Req, Res, Get, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ValidationPipe } from '@nestjs/common';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findById(id);
  } 

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}