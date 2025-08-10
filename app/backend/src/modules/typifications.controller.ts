import { Body, Controller, Post } from '@nestjs/common';

@Controller('typifications')
export class TypificationsController {
  @Post('validate')
  validate(@Body() body: { typificationId: string; fields: Record<string, unknown> }) {
    return { ok: true };
  }
}
