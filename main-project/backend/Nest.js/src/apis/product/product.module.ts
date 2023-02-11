import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../category/entities/category.entity';
import { ProductsCategoriesService } from '../category/productsCategories.service';
import { Product } from './entities/product.entity';
import { ProductsResolver } from './product.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, //
      Category,
    ]),
  ],
  providers: [
    ProductsService, //
    ProductsResolver,
    ProductsCategoriesService,
  ],
})
export class ProductsModule {}
