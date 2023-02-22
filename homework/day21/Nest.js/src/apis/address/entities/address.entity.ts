import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/apis/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: '100' })
  @Field(() => String)
  main: string;

  @Column({ type: 'varchar', length: '100' })
  @Field(() => String)
  detail: string;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;
}
