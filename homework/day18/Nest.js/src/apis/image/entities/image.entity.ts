import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/apis/product/entities/product.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  productImageId: string;

  @Column({ type: 'varchar', length: 100 })
  productImageUrl: string;

  @Column({ type: 'tinyint' })
  productImageIsMain: boolean;

  @ManyToOne(() => Product)
  product: Product;
}
