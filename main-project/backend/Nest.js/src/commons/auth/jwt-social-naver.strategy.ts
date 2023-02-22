import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-naver';

export class JwtNaverStrategy extends PassportStrategy(Strategy, 'naver') {
  constructor() {
    super({
      clientID: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/login/naver',
    });
  }

  validate(accessToken: string, refreshToken: string, profile: any) {
    console.log('accessToken:⭐️⭐️⭐️⭐️⭐️⭐️⭐️');
    console.log(accessToken);
    console.log('refreshToken:⭐️⭐️⭐️⭐️⭐️⭐️⭐️');
    console.log(refreshToken);
    console.log('profile:⭐️⭐️⭐️⭐️⭐️⭐️⭐️');
    console.log(profile);
    console.log('⭐️⭐️⭐️⭐️⭐️⭐️⭐️');
    return {
      name: profile.displayName,
      email: profile._json.email,
      password: '네이버',
      age: 25,
      phone: '010852369854',
      gender: true,
    };
  }
}
