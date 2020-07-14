/*
 * @Descripttion: 
 * @Author: lronelove
 * @Date: 2020-07-14 10:11:59
 * @email: 657828543@qq.com
 */ 
import { Controller, Get, Post, Body } from '@nestjs/common'
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cats.interface'

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() cat: Cat) {
    this.catsService.create(cat)
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }
}
