// auth.module.ts

import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersService } from '../user/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { JwtRefreshStrategy } from './strategies/jwt-access.strategy';
import { JwtAccessStrategy } from './strategies/jwt-strategie';
import { JwtGoogleStrategy } from 'src/commons/auth/jwt-social-google.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({}), //
    TypeOrmModule.forFeature([
      User, //
    ]),
  ],
  providers: [
    AuthResolver, //
    AuthService,
    UsersService,
    JwtRefreshStrategy,
    JwtGoogleStrategy,
    JwtService,
    JwtAccessStrategy,
  ],
  controllers: [
    AuthController, //
  ],
})
export class AuthModule {}
