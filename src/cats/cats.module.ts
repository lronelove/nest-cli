/*
 * @Descripttion: 
 * @Author: lronelove
 * @Date: 2020-07-14 13:46:33
 * @email: 657828543@qq.com
 */ 
import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatsModule {}
