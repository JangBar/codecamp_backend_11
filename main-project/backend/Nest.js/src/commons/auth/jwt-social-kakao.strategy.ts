import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';

export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/login/kakao',
      scope: [
        'profile_nickname',
        'profile_image',
        'account_email',
        'gender',
        'age_range',
      ],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    console.log('accessToken:⭐️⭐️⭐️⭐️⭐️⭐️⭐️');
    console.log(accessToken);
    console.log('refreshToken:⭐️⭐️⭐️⭐️⭐️⭐️⭐️');
    console.log(refreshToken);
    console.log('profile:⭐️⭐️⭐️⭐️⭐️⭐️⭐️');
    console.log(profile);
    console.log('⭐️⭐️⭐️⭐️⭐️⭐️⭐️');

    return {
      name: profile.username,
      email: profile._json.kakao_account.email,
      password: '카카오',
      age: 35,
      phone: '01098765432',
      gender: true,
    };
  }
}
