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
  userName: string;

  @Column({ type: 'varchar', length: 100 })
  // @Field(() => String)
  userPassword: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  userEmail: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  userPhone: string;

  @Column({ type: 'int' })
  @Field(() => Int)
  userAge: number;

  @Column({ type: 'tinyint' })
  @Field(() => Boolean)
  userGender: boolean;

  @DeleteDateColumn()
  deletedAt: Date;
}
