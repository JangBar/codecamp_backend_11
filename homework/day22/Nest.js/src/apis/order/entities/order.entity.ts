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
  price: number;

  @Column({ type: 'date' })
  @Field(() => Date)
  day: Date;

  @Column({ type: 'char', length: '5' })
  @Field(() => String)
  method: string;

  @Column({ type: 'tinyint' })
  @Field(() => Boolean)
  isPaid: boolean;

  @Column({ type: 'tinyint' })
  @Field(() => Boolean)
  isRefund: boolean;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @ManyToOne(() => Product)
  @Field(() => Product)
  produc: Product;
}
