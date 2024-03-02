import { Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('login')
  async login(@Request() req){
    return this.authService.login(req.user)
  }


  @Get('profile')
  getProfile(@Request() req){
    return req.user
  }

}
