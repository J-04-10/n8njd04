import { Body, Controller, Param, Post } from '@nestjs/common';
import { EventsGateway } from '../sockets/events.gateway';

@Controller('messages')
export class MessagesController {
  constructor(private readonly gateway: EventsGateway) {}

  @Post('webhook/out')
  messageOut(@Body() body: any) {
    this.gateway.emitEvent('message.out', body);
    return { ok: true };
  }

  @Post(':id/ack')
  ack(@Param('id') id: string, @Body() body: any) {
    this.gateway.emitEvent('message.ack', { id, ...body });
    return { ok: true };
  }
}
