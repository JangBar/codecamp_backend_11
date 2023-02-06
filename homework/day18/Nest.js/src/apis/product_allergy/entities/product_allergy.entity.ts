import { Product } from 'src/apis/product/entities/product.entity';
import { Column, ManyToMany, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Allergy {
  @PrimaryGeneratedColumn('uuid')
  allergyId: string;

  @Column({ type: 'date' })
  allergyName: Date;

  @ManyToMany(() => Product, (products) => products.allergys)
  products: Product[];
}
