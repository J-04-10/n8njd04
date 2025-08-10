import { Controller, Get, Param } from '@nestjs/common';
import { WaConnectorService } from './wa-connector.service';

@Controller('channels')
export class WaConnectorController {
  constructor(private readonly svc: WaConnectorService) {}

  @Get(':id/qr')
  async getQr(@Param('id') id: string) {
    const qr = await this.svc.getCurrentQr(id);
    return { channelId: id, qr };
  }
}
