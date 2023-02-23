import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllergiesService } from '../allergies/allergies.service';
import { Allergy } from '../allergies/entities/allergy.entity';
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
      Allergy,
    ]),
  ],
  providers: [
    ProductsResolver, //
    ProductsService,
    CategoryService,
    AllergiesService,
  ],
})
export class ProductsModule {}
