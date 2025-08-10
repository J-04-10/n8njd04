import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('conversations')
export class ConversationsController {
  @Get()
  list(@Query('status') status?: string, @Query('mine') mine?: string) {
    return [{ id: 'c1', status: status ?? 'open', mine: mine === 'true' }];
  }

  @Post(':id/messages')
  sendMessage(@Param('id') id: string, @Body() body: { body?: string; mediaUrl?: string }) {
    return { id: 'm1', conversationId: id, ...body };
  }

  @Post(':id/labels')
  addLabel(@Param('id') id: string, @Body() body: { labels: string[] }) {
    return { id, labels: body.labels };
  }

  @Post(':id/typify')
  typify(@Param('id') id: string, @Body() body: { typificationId: string; fields?: unknown }) {
    return { id, typificationId: body.typificationId, fields: body.fields };
  }

  @Post(':id/close')
  close(@Param('id') id: string, @Body() body: { reason?: string; tags?: string[] }) {
    return { id, status: 'closed', reason: body.reason, tags: body.tags ?? [] };
  }
}
