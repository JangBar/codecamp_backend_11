import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';
import { JwtAccessStrategy } from './apis/auth/strategies/jwt-access.strategy';
import { JwtRefreshStrategy } from './apis/auth/strategies/jwt-refresh.strategy';
import { CategoryModule } from './apis/category/category.module';
import { ProductsModule } from './apis/products/products.module';
import { UsersModule } from './apis/user/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductsModule,
    CategoryModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }), // 추가 (req는 기본적으로 들어오지만, res는 이걸 작성해야만 들어옴)
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
  ],
})
export class AppModule {}
