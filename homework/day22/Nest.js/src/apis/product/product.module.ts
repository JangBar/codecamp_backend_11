import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../category/entities/category.entity';
import { CategoriesService } from '../category/categories.service';
import { Product } from './entities/product.entity';
import { ProductsResolver } from './product.resolver';
import { ProductsService } from './products.service';
import { Brand } from '../brand/entities/brand.entity';
import { BrandService } from '../brand/brand.service';
import { Allergy } from '../product_allergy/entities/product_allergy.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, //
      Category,
      Brand,
      Allergy,
    ]),
  ],
  providers: [
    ProductsService, //
    ProductsResolver,
    CategoriesService,
    BrandService,
    Allergy,
  ],
})
export class ProductsModule {}
