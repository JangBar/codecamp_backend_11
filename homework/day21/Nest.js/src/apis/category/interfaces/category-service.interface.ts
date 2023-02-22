import { Category } from '../entities/category.entity';

export interface ICategoriesServiceCreate {
  name: string;
}

export interface ICreateProductServiceFindOne {
  categoryId: number;
}

export interface ICategoriesServiceFindOne {
  id?: number;
  category?: number;
}

export interface ICategoriesServiceDelete {
  id: number;
}

export interface ICategoriesServiceCheckSoldout {
  category: Category;
}
