import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    return { token: 'mock-jwt', user: { id: 'u1', email: body.email, role: 'ADMIN' } };
  }

  @Get('me')
  me() {
    return { id: 'u1', email: 'admin@example.com', role: 'ADMIN' };
  }
}
