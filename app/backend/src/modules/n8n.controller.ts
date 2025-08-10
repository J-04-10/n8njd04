import { Body, Controller, Post } from '@nestjs/common';

@Controller('n8n')
export class N8nController {
  @Post('webhook')
  webhook(@Body() body: any) {
    return { received: true };
  }
}
