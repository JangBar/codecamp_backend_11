import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/apis/product/entities/product.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Brand {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  id: number;

  @Column({ type: 'char', length: 5 })
  @Field(() => String)
  brandName: string;

  @ManyToMany(() => Product, (products) => products.brands)
  @Field(() => [Product])
  products: Product[];
}
