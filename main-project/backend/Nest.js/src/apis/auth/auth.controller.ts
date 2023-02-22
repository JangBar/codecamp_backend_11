import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { DynamicAuthGuard } from './guards/dynamic-auth.guard-04';

export interface IOAuthUser {
  user: {
    name: string;
    email: string;
    password: string;
    age: number;
    phone: string;
    gender: boolean;
  };
}

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  // -------------------------------------------------------------------------------// 구글 로그인
  @Get('/login/:social')
  @UseGuards(DynamicAuthGuard)
  loginOAuth(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    req.params;
    this.authService.socialLogin({ req, res });
  }
}
