import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/product/entities/product.entity';
import { Column, ManyToMany, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Allergy {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  id: number;

  @Column({ type: 'date' })
  @Field(() => Date)
  name: Date;

  @ManyToMany(() => Product, (products) => products.allergys)
  @Field(() => [Product])
  products: Product[];
}
