import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  name: string;

  @Column({ type: 'varchar', length: 100 })
  // @Field(() => String)
  password: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  email: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  phone: string;

  @Column({ type: 'int' })
  @Field(() => Int)
  age: number;

  @Column({ type: 'tinyint' })
  @Field(() => Boolean)
  gender: boolean;

  @Column({ default: 0 })
  @Field(() => Int)
  amount: number;

  @DeleteDateColumn()
  deletedAt: Date;
}
