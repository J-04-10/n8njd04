import { Body, Controller, Post } from '@nestjs/common';

@Controller('crm')
export class CrmController {
  @Post('contacts/sync')
  syncContact(@Body() body: any) {
    return { ok: true, contact: body };
  }

  @Post('activities/sync')
  syncActivity(@Body() body: any) {
    return { ok: true, activity: body };
  }
}
