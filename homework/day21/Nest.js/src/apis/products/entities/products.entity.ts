import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Allergy } from 'src/apis/allergies/entities/allergy.entity';
import { Category } from '../../category/entities/category.entity';
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
  check: boolean;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Category)
  @Field(() => Category)
  category: Category;

  @JoinTable()
  @ManyToMany(() => Allergy, (allergies) => allergies.products)
  @Field(() => [Allergy])
  allergies: Allergy[];
}
