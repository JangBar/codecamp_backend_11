import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/apis/product/entities/product.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  brandId: string;

  @Column({ type: 'char', length: 4 })
  brandName: string;

  @ManyToMany(() => Product, (products) => products.brands)
  products: Product[];
}
