import { Test, TestingModule } from '@nestjs/testing';
import { TypificationsController } from './typifications.controller';

describe('TypificationsController', () => {
  let controller: TypificationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypificationsController],
    }).compile();

    controller = module.get<TypificationsController>(TypificationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
