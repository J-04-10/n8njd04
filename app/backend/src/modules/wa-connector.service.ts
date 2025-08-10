import { Injectable } from '@nestjs/common';

@Injectable()
export class WaConnectorService {
  async getCurrentQr(channelId: string): Promise<string> {
    // TODO: Integrate with wa-connector service or Redis store
    return `mock-qr-for-${channelId}`;
  }
}
