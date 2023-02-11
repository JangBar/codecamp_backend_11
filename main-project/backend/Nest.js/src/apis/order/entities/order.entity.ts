import { Field, Int } from '@nestjs/graphql';
import { Product } from 'src/apis/product/entities/product.entity';
import { User } from 'src/apis/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ type: 'int' })
  @Field(() => Int)
  orderPrice: number;

  @Column({ type: 'date' })
  @Field(() => Date)
  orderDay: Date;

  @Column({ type: 'char', length: '5' })
  @Field(() => String)
  orderMethod: string;

  @Column({ type: 'tinyint' })
  @Field(() => Boolean)
  orderIsPaid: boolean;

  @Column({ type: 'tinyint' })
  @Field(() => Boolean)
  orderIsRefund: boolean;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @ManyToOne(() => Product)
  @Field(() => Product)
  produc: Product;
}
