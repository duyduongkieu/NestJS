import { Inumber } from './../../model/number.model';
import { CalculateService } from './calculate.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('calculate')
export class CalculateController {
  constructor(private calculatService: CalculateService) {}
  @Get()
  getAll() {
    const num = this.calculatService.getAll();
    return num;
  }
  @Post()
  calculate(@Body() num: Inumber) {
    num.a = +num.a;
    num.b = +num.b;
    const number = this.calculatService.calculation(num.a, num.b);
    return number;
  }
}
