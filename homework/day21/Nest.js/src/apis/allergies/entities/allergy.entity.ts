import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/products/entities/products.entity';
import { Column, ManyToMany, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Allergy {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @ManyToMany(() => Product, (products) => products.allergies)
  @Field(() => [Product])
  products: Product[];
}
