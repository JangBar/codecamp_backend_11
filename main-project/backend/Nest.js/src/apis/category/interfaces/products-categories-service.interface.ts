import { Category } from '../entities/category.entity';

export interface IProductsCategoriesServiceCreate {
  categoryName: string;
}

export interface IProductsCategoriesServiceFindOne {
  productCategory: string;
}
