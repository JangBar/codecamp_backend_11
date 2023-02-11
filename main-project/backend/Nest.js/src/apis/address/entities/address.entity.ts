import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/apis/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ type: 'varchar', length: '100' })
  @Field(() => String)
  addressMain: string;

  @Column({ type: 'varchar', length: '100' })
  @Field(() => String)
  addressDetail: string;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;
}
