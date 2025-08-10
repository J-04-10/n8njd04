import { Body, Controller, Post } from '@nestjs/common';

@Controller('audit')
export class AuditController {
  @Post('log')
  log(@Body() body: any) {
    return { ok: true };
  }
}
