import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/entities/category.entity';
import { Product } from './entities/products.entity';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, //
      Category,
    ]),
  ],
  providers: [
    ProductsResolver, //
    ProductsService,
    CategoryService,
  ],
})
export class ProductsModule {}
