import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('labels')
export class LabelsController {
  @Get()
  list() {
    return [
      { id: 'l1', name: 'Prioridad Alta', color: '#e53e3e' },
      { id: 'l2', name: 'Seguimiento', color: '#3182ce' },
    ];
  }

  @Post()
  create(@Body() body: { name: string; color: string }) {
    return { id: 'l3', ...body };
  }
}
