import { Test, TestingModule } from '@nestjs/testing';
import { CalculateController } from './calculate.controller';

describe('Calculate Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CalculateController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: CalculateController = module.get<CalculateController>(CalculateController);
    expect(controller).toBeDefined();
  });
});
