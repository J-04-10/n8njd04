import { Body, Controller, Post } from '@nestjs/common';

@Controller('bot')
export class BotController {
  @Post('incoming')
  incoming(@Body() body: any) {
    return { ok: true };
  }

  @Post('action')
  action(@Body() body: { type: string; payload?: unknown }) {
    return { ok: true, type: body.type };
  }
}
