/*
 * @Descripttion: 
 * @Author: lronelove
 * @Date: 2020-07-14 10:33:51
 * @email: 657828543@qq.com
 */ 
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface'

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = []

  create(cat: Cat) {
    this.cats.push(cat)
  }

  findAll(): Cat[] {
    return this.cats
  }
}
