import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/apis/product/entities/product.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  brandId: string;

  @Column({ type: 'char', length: 4 })
  @Field(() => String)
  brandName: string;

  @ManyToMany(() => Product, (products) => products.brands)
  @Field(() => [Product])
  products: Product[];
}
