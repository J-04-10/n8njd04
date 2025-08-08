import { Module } from '@nestjs/common';
import { WaConnectorController } from '../wa-connector.controller';
import { WaConnectorService } from '../wa-connector.service';

@Module({
  controllers: [WaConnectorController],
  providers: [WaConnectorService],
})
export class WaConnectorModule {}
