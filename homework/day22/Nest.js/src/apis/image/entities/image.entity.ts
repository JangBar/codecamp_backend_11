import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/apis/product/entities/product.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  Url: string;

  @Column({ type: 'tinyint' })
  @Field(() => Boolean)
  isMain: boolean;

  @ManyToOne(() => Product)
  @Field(() => Product)
  product: Product;
}
