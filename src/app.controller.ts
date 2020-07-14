/*
 * @Descripttion: 
 * @Author: lronelove
 * @Date: 2020-07-14 09:38:13
 * @email: 657828543@qq.com
 */ 
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
