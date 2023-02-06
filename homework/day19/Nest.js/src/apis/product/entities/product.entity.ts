import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Brand } from 'src/apis/brand/entities/brand.entity';
import { Allergy } from 'src/apis/product_allergy/entities/product_allergy.entity';
import { Category } from 'src/apis/category/entities/category.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  productId: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  productName: string;

  @Column({ type: 'int' })
  @Field(() => Int)
  productPrice: number;

  @Column({ type: 'int' })
  @Field(() => Int)
  productWeight: number;

  @Column({ type: 'int' })
  @Field(() => Int)
  productKcal: number;

  @Column({ type: 'int' })
  @Field(() => Int)
  productProtein: number;

  @Column({ type: 'int' })
  @Field(() => Int)
  productFat: number;

  @Column({ type: 'int' })
  @Field(() => Int)
  productMg: number;

  @Column({ type: 'int' })
  @Field(() => Int)
  productSugar: number;

  @Column({ type: 'tinyint' })
  @Field(() => Boolean)
  premiumCheck: boolean;

  @ManyToOne(() => Category)
  @Field(() => Category)
  category: Category;

  @JoinTable()
  @ManyToMany(() => Allergy, (allergys) => allergys.products)
  @Field(() => [Allergy])
  allergys: Allergy[];

  @JoinTable()
  @ManyToMany(() => Brand, (brands) => brands.products)
  @Field(() => [Brand])
  brands: Brand[];
}
