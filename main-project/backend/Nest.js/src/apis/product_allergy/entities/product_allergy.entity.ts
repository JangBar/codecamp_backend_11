import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/product/entities/product.entity';
import { Column, ManyToMany, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Allergy {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ type: 'date' })
  @Field(() => Date)
  allergyName: Date;

  @ManyToMany(() => Product, (products) => products.allergys)
  @Field(() => [Product])
  products: Product[];
}
