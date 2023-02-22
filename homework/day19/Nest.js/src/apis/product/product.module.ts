import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../category/entities/category.entity';
import { Product } from './entities/product.entity';
import { ProductsResolver } from './product.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, //
    ]),
  ],
  providers: [
    ProductsService, //
    ProductsResolver,
    Category,
  ],
})
export class ProductsModule {}
