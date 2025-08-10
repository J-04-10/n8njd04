import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('agents')
export class AgentsController {
  @Get('presence')
  presence() {
    return [{ id: 'a1', userId: 'u1', active: true }];
  }

  @Post('assign')
  assign(@Body() body: { conversationId: string; agentId: string }) {
    return { status: 'ok', ...body };
  }

  @Post('transfer')
  transfer(@Body() body: { conversationId: string; toAgentId: string }) {
    return { status: 'ok', ...body };
  }
}
