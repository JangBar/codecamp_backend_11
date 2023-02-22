import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BrandService } from '../brand/brand.service';
import { CategoriesService } from '../category/categories.service';
import { Allergy } from '../product_allergy/entities/product_allergy.entity';
import { Product } from './entities/product.entity';
import {
  IProductsServiceCreate,
  IProductsServiceFindOne,
  IProductServiceUpdate,
  IProductServiceCheckUpdate,
  IProductsServiceDelete,
} from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,

    private readonly categoriesService: CategoriesService,

    private readonly allergiesService: Allergy,

    private readonly brandService: BrandService,
  ) {}

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({
      where: { id: productId },
      relations: ['category'],
    });
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({
      relations: ['category'],
    });
  }

  findAllWithDeleted(): Promise<Product[]> {
    return this.productsRepository.find({
      withDeleted: true,
      relations: ['category'],
    });
  }

  async delerestoreProductte({
    productId,
  }: IProductsServiceDelete): Promise<boolean> {
    const result2 = await this.productsRepository.softDelete({
      id: productId,
    });
    return result2.affected ? true : false; //
  }

  async update({
    productId,
    updateProductInput,
  }: IProductServiceUpdate): Promise<Product> {
    const product = await this.findOne({ productId });
    this.checkUpdate({ product });
    //////////////////////
    const { category, allergies, brands, ...rest } = updateProductInput;

    // 알러지
    const prevAllergies = await this.allergiesService.findByNames({
      allergies,
    });

    const temp = [];
    allergies.forEach((el) => {
      const isExists = prevAllergies.find((prevEl) => el === prevEl.name);
      if (!isExists) temp.push({ allergies: el });
    });

    const newAllergies = await this.allergiesService.bulkInsert({
      names: temp,
    });

    const allergiesNames = [...prevAllergies, ...newAllergies.identifiers];

    //
    // 브랜드
    const prevBrands = await this.brandService.findByBrands({
      brands,
    });

    const tempForBrand = [];
    brands.forEach((el) => {
      const isExists = prevBrands.find((prevEl) => el === prevEl.name);
      if (!isExists) tempForBrand.push({ productBrands: el });
    });

    const newBrands = await this.brandService.bulkInsert({
      names: tempForBrand,
    });
    const brandsNames = [...prevBrands, ...newBrands.identifiers];
    // new 내부에서 가져오려고 하는

    //
    const result = this.productsRepository.save({
      ...product,
      ...rest,
      category: { id: category },
      allergies: allergiesNames,
      brands: brandsNames,
    });

    /////////////////////

    return result;
  }

  checkUpdate({ product }: IProductServiceCheckUpdate): void {
    // if ('검증할 조건 아직 없음') {
    //   throw new UnprocessableEntityException('판매 불가 상품입니다.');
    // }
    console.log(product, '검증 완료되었습니다.');
  }

  async restore({ productId }: IProductsServiceDelete): Promise<boolean> {
    const result2 = await this.productsRepository.restore({
      id: productId,
    });
    return result2.affected ? true : false; //
  }

  async delete({ productId }: IProductsServiceDelete): Promise<boolean> {
    const result2 = await this.productsRepository.softDelete({
      id: productId,
    });
    return result2.affected ? true : false; //
  }

  async create({
    createProductInput,
  }: IProductsServiceCreate): Promise<Product> {
    const { category, brands, ...Product } = createProductInput;

    const creatBrand = await this.brandService.create({
      brandName: brands,
    });

    const findCategory = await this.categoriesService.findOne({
      category,
    });

    const result = await this.productsRepository.save({
      ...Product,
      category: findCategory,
      brands: creatBrand,
    });
    return result;
  }
}
