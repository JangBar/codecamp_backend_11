import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from '../user/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../user/users.module';
import { User } from '../user/entities/user.entity';
import { AuthController } from './auth.controller';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { JwtGoogleStrategy } from './strategies/jwt-social-google.strategy';
import { JwtNaverStrategy } from './strategies/jwt-social-naver.strategy ';
import { JwtKakaoStrategy } from './strategies/jwt-social-kakao.strategy';

@Module({
  imports: [
    JwtModule.register({}), //
    TypeOrmModule.forFeature([
      UsersModule, //
      User,
    ]),
  ],
  controllers: [
    AuthController, //
  ],
  providers: [
    JwtAccessStrategy,
    JwtRefreshStrategy,
    JwtGoogleStrategy,
    JwtNaverStrategy,
    JwtKakaoStrategy,
    AuthResolver, //
    AuthService,
    UsersService,
  ],
})
export class AuthModule {}
