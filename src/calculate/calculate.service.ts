import { NUMBER } from './../../API/number';
import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class CalculateService {
  number = NUMBER;
  getAll() {
    return this.number;
  }
  calculation(a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) {
      throw new HttpException('a or b is not number', 404);
    } else {
      this.number.push({ status: true, add: a + b, substract: a - b });
      return this.number;
    }
  }
}
