import { NUMBER } from './../../API/number';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculateService {
  number = NUMBER;
  getAll() {
    return this.number;
  }
  calculation(a, b) {
    this.number.push({ status: true, add: a + b, substract: a - b });
    return this.number;
  }
}
