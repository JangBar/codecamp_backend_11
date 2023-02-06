import { Product } from 'src/apis/product/entities/product.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  orderId: string;

  @Column({ type: 'int' })
  orderPrice: string;

  @Column({ type: 'date' })
  orderDay: Date;

  @Column({ type: 'char', length: '5' })
  orderMethod: string;

  @Column({ type: 'tinyint' })
  orderIsPaid: boolean;

  @Column({ type: 'tinyint' })
  orderIsRefund: boolean;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Product)
  produc: Product;
}
