import { Test, TestingModule } from '@nestjs/testing';
import { TypificationsService } from './typifications.service';

describe('TypificationsService', () => {
  let service: TypificationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypificationsService],
    }).compile();

    service = module.get<TypificationsService>(TypificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
