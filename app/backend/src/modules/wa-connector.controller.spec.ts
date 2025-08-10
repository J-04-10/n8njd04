import { Test, TestingModule } from '@nestjs/testing';
import { WaConnectorController } from './wa-connector.controller';

describe('WaConnectorController', () => {
  let controller: WaConnectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WaConnectorController],
    }).compile();

    controller = module.get<WaConnectorController>(WaConnectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
