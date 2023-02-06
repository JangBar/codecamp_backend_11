import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/apis/product/entities/product.entity';
import { Field } from '@nestjs/graphql';

@Entity()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  productImageId: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  productImageUrl: string;

  @Column({ type: 'tinyint' })
  @Field(() => Boolean)
  productImageIsMain: boolean;

  @ManyToOne(() => Product)
  @Field(() => Product)
  product: Product;
}
