// products-service.interface.ts

import { CreateProductInput } from '../dto/create-product.input';
import { UpdateProductInput } from '../dto/update-product.input';

export interface IProductsServiceCreate {
  createProductInput: CreateProductInput;
}

export interface IProductsServiceFindOne {
  id: string;
}
export interface IProductsServiceUpdate {
  id: string;
  updateProductInput: UpdateProductInput;
}

export interface IProductsServiceDelete1 {
  name: string;
}

export interface IProductsServiceDelete2 {
  id: string;
}
