import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  name: string;

  @Column()
  // @Field(() => String)
  password: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  email: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => String)
  phone: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
