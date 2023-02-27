import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-kakao';
import { json } from 'stream/consumers';

export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/login/kakao',
      scope: ['profile_nickname', 'account_email'],
    });
  }

  validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log('😎😎😎accessToken :' + accessToken);
    console.log('😎😎😎refreshToken :' + refreshToken);
    console.log('😎😎😎profile :' + JSON.stringify(profile._json));

    return {
      name: profile.displayName,
      email: profile._json.kakao_account.email,
      password: '1234',
      phone: 0,
    };
  }
}
