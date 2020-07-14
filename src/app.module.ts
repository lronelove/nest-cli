/*
 * @Descripttion: 
 * @Author: lronelove
 * @Date: 2020-07-14 09:38:13
 * @email: 657828543@qq.com
 */ 
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
