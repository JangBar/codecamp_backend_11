import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';
import { JwtRefreshStrategy } from './apis/auth/strategies/jwt-access.strategy';
import { JwtAccessStrategy } from './apis/auth/strategies/jwt-strategie';
import { ProductsCategoriesModule } from './apis/category/productsCategories.module';
import { PaymentModule } from './apis/payment/payment.module';
import { ProductsModule } from './apis/product/product.module';
import { UsersModule } from './apis/user/users.module';
import { JwtGoogleStrategy } from './commons/auth/jwt-social-google.strategy';
import { JwtKakaoStrategy } from './commons/auth/jwt-social-kakao.strategy';
import { JwtNaverStrategy } from './commons/auth/jwt-social-naver.strategy';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductsModule,
    PaymentModule,
    ProductsCategoriesModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
  providers: [
    JwtAccessStrategy, //
    JwtRefreshStrategy,
    JwtGoogleStrategy, //google소셜로그인
    JwtNaverStrategy, //naver소셜로그인
    JwtKakaoStrategy, //kakao소셜로그인
  ],
})
export class AppModule {}
