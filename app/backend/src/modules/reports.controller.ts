import { Controller, Get } from '@nestjs/common';

@Controller('reports')
export class ReportsController {
  @Get('metrics')
  metrics() {
    return { frt: 60, art: 300, volumes: 100 };
  }

  @Get()
  list() {
    return { topLabels: [], topTypifications: [] };
  }
}
