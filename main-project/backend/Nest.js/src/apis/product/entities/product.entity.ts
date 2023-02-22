import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Brand } from 'src/apis/brand/entities/brand.entity';
import { Allergy } from 'src/apis/product_allergy/entities/product_allergy.entity';
import { Category } from 'src/apis/category/entities/category.entity';
import {
  Column,
  DeleteDateColumn,
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
  id: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  name: string;

  @Column({ type: 'int' })
  @Field(() => Int)
  price: number;

  @Column({ type: 'int' })
  @Field(() => Int)
  weight: number;

  @Column({ type: 'int' })
  @Field(() => Int)
  kcal: number;

  @Column({ type: 'int' })
  @Field(() => Int)
  protein: number;

  @Column({ type: 'int' })
  @Field(() => Int)
  fat: number;

  @Column({ type: 'int' })
  @Field(() => Int)
  mg: number;

  @Column({ type: 'int' })
  @Field(() => Int)
  sugar: number;

  @Column({ type: 'tinyint' })
  @Field(() => Boolean)
  premiumCheck: boolean;

  @ManyToOne(() => Category)
  @Field(() => Category)
  category: Category;

  @DeleteDateColumn()
  deletedAt: Date;

  @JoinTable()
  @ManyToMany(() => Allergy, (allergys) => allergys.products)
  @Field(() => [Allergy])
  allergys: Allergy[];

  @JoinTable()
  @ManyToMany(() => Brand, (brands) => brands.products)
  @Field(() => [Brand])
  brands: Brand[];
}
