import { Brand } from 'src/apis/brand/entities/brand.entity';
import { Allergy } from 'src/apis/product_allergy/entities/product_allergy.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  productId: string;

  @Column({ type: 'varchar', length: 100 })
  productName: string;

  @Column({ type: 'int' })
  productPrice: number;

  @Column({ type: 'int' })
  productWeight: number;

  @Column({ type: 'int' })
  productKcal: number;

  @Column({ type: 'int' })
  productProtein: number;

  @Column({ type: 'int' })
  productFat: number;

  @Column({ type: 'int' })
  productMg: number;

  @Column({ type: 'int' })
  productSugar: number;

  @Column({ type: 'tinyint' })
  premiumCheck: boolean;

  @ManyToOne(() => Category)
  category: Category;

  @JoinTable()
  @ManyToMany(() => Allergy, (allergys) => allergys.products)
  allergys: Allergy[];

  @JoinTable()
  @ManyToMany(() => Brand, (brands) => brands.products)
  brands: Brand[];
}
