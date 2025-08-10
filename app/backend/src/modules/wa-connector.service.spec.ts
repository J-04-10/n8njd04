import { Test, TestingModule } from '@nestjs/testing';
import { WaConnectorService } from './wa-connector.service';

describe('WaConnectorService', () => {
  let service: WaConnectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaConnectorService],
    }).compile();

    service = module.get<WaConnectorService>(WaConnectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
